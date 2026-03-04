import Link from "next/link";

const footerLinks = {
  reports: [
    { label: "Videos", href: "/videos" },
    { label: "Transcripts", href: "/transcripts" },
    { label: "Archives", href: "/videos" },
  ],
  about: [
    { label: "Ron's Bio", href: "/bio" },
    { label: "The Shepherd Group", href: "/bio" },
    { label: "Our Mission", href: "/bio" },
  ],
  contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "Advertising", href: "/contact" },
    { label: "Press Kit", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reports Column */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-4">
              REPORTS
            </h3>
            <ul className="space-y-2">
              {footerLinks.reports.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-4">
              ABOUT
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase mb-4">
              CONTACT
            </h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-muted text-center">
            Copyright 2016 © The Shepherd Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}