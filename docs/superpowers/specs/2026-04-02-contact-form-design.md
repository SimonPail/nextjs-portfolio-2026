# Contact Form — Design Spec

## Overview

Wire up the existing contact form on the portfolio to send emails via Resend, with Zod-based validation on both client and server.

## Decisions

- **Email service:** Resend (API key in `.env.local`)
- **Validation:** Zod schema shared between client and server
- **Backend pattern:** Server Action (not API route)
- **Form state:** React 19 `useActionState`
- **Success UX:** Inline success message + form reset
- **Spam protection:** None for now

## 1. Validation Schema

**File:** `app/lib/schemas/contact.ts`

Shared Zod schema used by both server action and client form:

| Field   | Type   | Rules                          |
|---------|--------|--------------------------------|
| name    | string | required, min 2 chars          |
| email   | string | required, valid email format   |
| subject | string | required, min 2 chars          |
| message | string | required, min 10 chars         |

## 2. Server Action

**File:** `app/actions/contact.ts`

- `"use server"` directive
- Receives `FormData`, parses with Zod schema
- On validation failure: returns `{ success: false, errors: { fieldName: "message" } }`
- On success: sends email via Resend SDK to `simon.paillassa@gmail.com`
- Sender: `contact@simbl.dev` (verified custom domain)
- On email failure: returns `{ success: false, errors: { form: "Failed to send message." } }`
- On email success: returns `{ success: true }`
- Email body: clean HTML template with sender name, email (as reply-to), subject, and message

## 3. Form Component Update

**File:** `app/components/contact/ContactForm.tsx`

Changes to the existing component:

- Add `"use client"` directive
- Use `useActionState` to call server action and track pending/success/error states
- Add `name` attributes to all form inputs (`name`, `email`, `subject`, `message`)
- Show inline error messages under each field using `text-error` MD3 token
- Show success banner after submission, reset form
- Disable submit button while pending, show "Sending..." label

No new components created.

## 4. Dependencies & Environment

**New packages:**
- `resend`
- `zod`

**Environment variables (`.env.local`):**
- `RESEND_API_KEY` — Resend API key

**`.gitignore`:** Ensure `.env.local` is listed.

## File Summary

| File | Action |
|------|--------|
| `app/lib/schemas/contact.ts` | Create |
| `app/actions/contact.ts` | Create |
| `app/components/contact/ContactForm.tsx` | Modify |
| `.env.local` | Create |
| `package.json` | Modify (add resend, zod) |
