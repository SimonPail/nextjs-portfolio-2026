"use server";

import { Resend } from "resend";
import { createContactSchema } from "@/app/lib/schemas/contact";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  success: boolean;
  errors?: Record<string, string>;
  values?: Record<string, string>;
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

  const localeValue = formData.get("locale") as string;
  const locale = hasLocale(routing.locales, localeValue)
    ? localeValue
    : routing.defaultLocale;

  const messages = (await import(`@/messages/${locale}.json`)).default;
  const t = messages.ContactForm;

  const contactSchema = createContactSchema({
    nameMin: t.validationNameMin,
    emailInvalid: t.validationEmailInvalid,
    subjectMin: t.validationSubjectMin,
    messageMin: t.validationMessageMin,
  });

  const values: Record<string, string> = {
    name: String(raw.name ?? ""),
    email: String(raw.email ?? ""),
    subject: String(raw.subject ?? ""),
    message: String(raw.message ?? ""),
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
    return { success: false, errors, values };
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
    console.error("Resend error:", error);
    return { success: false, errors: { form: t.error }, values };
  }

  return { success: true };
}
