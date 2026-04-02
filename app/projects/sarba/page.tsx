import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarba — Expense Management App",
  description:
    "Expense Management Application designed to help employees and administration to manage expenses incurred during working days.",
};

const userFeatures = [
  "Create expenses, attach receipts, and manage past transactions",
  "Receive notifications for pending signatures",
  "Sign monthly reports and review previous ones",
];

const adminFeatures = [
  "Generate monthly reports for all employees",
  "Request and track signature statuses",
  "Download signed reports",
  "Multi-currency expense support",
];

export default function SarbaPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-secondary hover:underline mb-12 font-body"
        >
          <span className="material-symbols-outlined text-sm mr-1">
            arrow_back
          </span>
          Back to projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface font-headline mb-6">
          Sarba
        </h1>

        {/* Description */}
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl mb-16 font-body">
          This application simplifies expense tracking and report management for
          companies. Employees can log expenses in multiple currencies, sign
          monthly reports, and receive notifications for approvals.
          Administrators can generate reports, request signatures, and download
          finalized documents — all in a seamless, digital workflow.
        </p>

        {/* Mockup 1 */}
        <div className="mb-16">
          <Image
            src="/sarba-mockup-1.png"
            alt="Sarba application mockup showing expense management interface"
            width={1920}
            height={1080}
            className="w-full rounded-xl"
          />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-on-surface font-headline mb-6">
              User Features
            </h2>
            <ul className="space-y-4">
              {userFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-on-surface-variant font-body"
                >
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-lg">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-on-surface font-headline mb-6">
              Admin Features
            </h2>
            <ul className="space-y-4">
              {adminFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-on-surface-variant font-body"
                >
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-lg">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mockup 2 */}
        <div>
          <Image
            src="/sarba-mockup-2.png"
            alt="Sarba application mockup showing report management"
            width={1080}
            height={1080}
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
