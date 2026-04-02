# Contact Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wire up the existing portfolio contact form to validate input with Zod and send emails via Resend using a Next.js Server Action.

**Architecture:** A shared Zod schema validates on both client and server. A Server Action receives FormData, validates it, and sends an email via Resend. The existing ContactForm component uses React 19's `useActionState` for state management.

**Tech Stack:** Next.js 16, React 19, Zod, Resend, TypeScript

---

### Task 1: Install dependencies and configure environment

**Files:**
- Modify: `package.json`
- Create: `.env.local`

- [ ] **Step 1: Install resend and zod**

Run:
```bash
npm install resend zod
```

Expected: Both packages added to `dependencies` in `package.json`.

- [ ] **Step 2: Create `.env.local`**

Create `.env.local` at project root with:

```
RESEND_API_KEY=re_XfdN9SNM_NJ8WcpuEc9D2rRKGeWLuxRuY
```

Verify `.env*` is already in `.gitignore` (it is — line 34).

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add resend and zod dependencies"
```

Note: Do NOT commit `.env.local`.

---

### Task 2: Create the Zod validation schema

**Files:**
- Create: `app/lib/schemas/contact.ts`

- [ ] **Step 1: Create the schema file**

Create `app/lib/schemas/contact.ts`:

```typescript
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(2, "Subject must be at least 2 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

- [ ] **Step 2: Verify the file compiles**

Run:
```bash
npx tsc --noEmit app/lib/schemas/contact.ts 2>&1 || true
```

If there are import errors, check that `zod` was installed correctly.

- [ ] **Step 3: Commit**

```bash
git add app/lib/schemas/contact.ts
git commit -m "feat: add Zod validation schema for contact form"
```

---

### Task 3: Create the Server Action

**Files:**
- Create: `app/actions/contact.ts`

- [ ] **Step 1: Create the server action file**

Create `app/actions/contact.ts`:

```typescript
"use server";

import { Resend } from "resend";
import { contactSchema } from "@/app/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  success: boolean;
  errors?: Record<string, string>;
} | null;

export async function sendContactEmail(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const errors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string") {
        errors[field] = issue.message;
      }
    }
    return { success: false, errors };
  }

  const { name, email, subject, message } = result.data;

  const { error } = await resend.emails.send({
    from: "contact@simbl.dev",
    to: "simon.paillassa@gmail.com",
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    return { success: false, errors: { form: "Failed to send message. Please try again." } };
  }

  return { success: true };
}
```

- [ ] **Step 2: Verify the file compiles**

Run:
```bash
npx tsc --noEmit app/actions/contact.ts 2>&1 || true
```

- [ ] **Step 3: Commit**

```bash
git add app/actions/contact.ts
git commit -m "feat: add server action for contact form email sending"
```

---

### Task 4: Update the ContactForm component

**Files:**
- Modify: `app/components/contact/ContactForm.tsx`

- [ ] **Step 1: Rewrite ContactForm with useActionState and validation**

Replace the entire contents of `app/components/contact/ContactForm.tsx` with:

```tsx
"use client";

import { useActionState, useRef, useEffect } from "react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    sendContactEmail,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section className="lg:col-span-7">
      <div className="bg-surface-container-low p-8 md:p-12 rounded-xl">
        {state?.success && (
          <div className="mb-8 p-4 rounded-lg bg-tertiary-container text-on-tertiary-container font-body text-sm">
            Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}
        {state?.errors?.form && (
          <div className="mb-8 p-4 rounded-lg bg-error-container text-on-error-container font-body text-sm">
            {state.errors.form}
          </div>
        )}
        <form ref={formRef} action={formAction} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-outline">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="bg-transparent border-b border-outline-variant focus:border-secondary py-3 transition-colors placeholder:text-neutral-400 outline-none font-body"
              />
              {state?.errors?.name && (
                <p className="text-error text-xs font-body">{state.errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-outline">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                className="bg-transparent border-b border-outline-variant focus:border-secondary py-3 transition-colors placeholder:text-neutral-400 outline-none font-body"
              />
              {state?.errors?.email && (
                <p className="text-error text-xs font-body">{state.errors.email}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-outline">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry / General Question"
              className="bg-transparent border-b border-outline-variant focus:border-secondary py-3 transition-colors placeholder:text-neutral-400 outline-none font-body"
            />
            {state?.errors?.subject && (
              <p className="text-error text-xs font-body">{state.errors.subject}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-outline">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Briefly describe your vision..."
              rows={4}
              className="bg-transparent border-b border-outline-variant focus:border-secondary py-3 transition-colors placeholder:text-neutral-400 outline-none resize-none font-body"
            />
            {state?.errors?.message && (
              <p className="text-error text-xs font-body">{state.errors.message}</p>
            )}
          </div>
          <div className="pt-6">
            <button
              type="submit"
              disabled={pending}
              className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest text-xs hover:brightness-95 transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {pending ? "Sending..." : "Send Message"}
              <span className="material-symbols-outlined text-sm">
                {pending ? "hourglass_empty" : "arrow_forward"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify the dev server compiles without errors**

Run:
```bash
npx next build 2>&1 | tail -20
```

Expected: Build succeeds with no type errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/contact/ContactForm.tsx
git commit -m "feat: wire up contact form with validation and email sending"
```

---

### Task 5: Manual end-to-end test

- [ ] **Step 1: Start the dev server**

Run:
```bash
npm run dev
```

- [ ] **Step 2: Test validation errors**

Navigate to the contact page. Submit the form empty. Verify inline error messages appear under each field.

- [ ] **Step 3: Test successful submission**

Fill in all fields with valid data and submit. Verify:
- Button shows "Sending..."
- Success message appears
- Form resets
- Email arrives at `simon.paillassa@gmail.com`

- [ ] **Step 4: Commit the spec update**

```bash
git add docs/superpowers/specs/2026-04-02-contact-form-design.md
git commit -m "docs: update contact form spec with custom domain"
```
