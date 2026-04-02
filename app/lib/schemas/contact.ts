import { z } from "zod";

export function createContactSchema(messages: {
  nameMin: string;
  emailInvalid: string;
  subjectMin: string;
  messageMin: string;
}) {
  return z.object({
    name: z.string().min(2, messages.nameMin),
    email: z.email(messages.emailInvalid),
    subject: z.string().min(2, messages.subjectMin),
    message: z.string().min(10, messages.messageMin),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
