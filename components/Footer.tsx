import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-primary/20 bg-footer-dark pt-12 md:pt-16 pb-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-primary">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
              <span className="font-display text-xl md:text-2xl font-bold text-slate-100">
                Ron Whitlock
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Dedicated to bringing unvarnished truths and comprehensive
              analysis of Texas politics and civic issues directly to you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg font-bold text-slate-100">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-slate-400 hover:text-primary transition-colors"
              >
                About Ron
              </Link>
              <Link
                href="/services"
                className="text-sm text-slate-400 hover:text-primary transition-colors"
              >
                All Services
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Video Archive
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg font-bold text-slate-100">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:tips@ronwhitlockreports.com"
                  className="hover:text-primary transition-colors"
                >
                  tips@ronwhitlockreports.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(555) 123-4567</span>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 border-t border-primary/10 pt-8 text-center">
          <p className="text-xs text-slate-500">
            Copyright 2016 © The Shepherd Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}