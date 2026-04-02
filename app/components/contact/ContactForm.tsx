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
