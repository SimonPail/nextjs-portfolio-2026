import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100 w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div className="text-lg font-bold font-headline text-stone-800">
          Simon Paillassa
        </div>
        <div className="flex gap-8">
          <Link
            href="https://github.com/SimonPail"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium text-stone-500 hover:text-secondary transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/simon-paillassa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium text-stone-500 hover:text-secondary transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:simon.paillassa@gmail.com"
            className="font-body text-sm font-medium text-stone-500 hover:text-secondary transition-colors"
          >
            Email
          </Link>
        </div>
        <div className="font-body text-sm font-medium text-stone-600 opacity-80">
          &copy; 2026 Simon Paillassa.
        </div>
      </div>
    </footer>
  );
}
