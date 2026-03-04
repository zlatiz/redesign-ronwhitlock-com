export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight tracking-tight text-white text-center">
            Contact Us
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20 px-4 md:px-10">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                Get In Touch
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Have a news tip? Want to be a guest on our show? We&apos;d love
                to hear from you. Reach out through any of the following
                channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-100 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:tips@ronwhitlockreports.com"
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      tips@ronwhitlockreports.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-100 mb-1">
                      Phone
                    </h3>
                    <p className="text-slate-400">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-100 mb-1">
                      Broadcast Area
                    </h3>
                    <p className="text-slate-400">
                      KUQI FOX38 - Coastal Bend
                      <br />
                      TV 9 - Rio Grande Valley
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-display text-lg font-bold text-slate-100 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-slate-400 hover:text-primary hover:bg-primary/20 transition-all"
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
                    className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-slate-400 hover:text-primary hover:bg-primary/20 transition-all"
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

            {/* Contact Form */}
            <div>
              <div className="rounded-xl border border-primary/20 bg-background-dark/50 p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-slate-100 mb-6">
                  Send a Message
                </h2>
                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-background-dark border border-primary/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-background-dark border border-primary/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg bg-background-dark border border-primary/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="News Tip / Guest Inquiry / Other"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background-dark border border-primary/20 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}