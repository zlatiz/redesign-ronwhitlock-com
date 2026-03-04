const testimonials = [
  {
    name: "Cob Wainson",
    title: "Title -Manooper",
    quote: "Leveraging data to sicover opportunities and mitigate risks.",
    avatar: "CW",
  },
  {
    name: "Robert Humps",
    title: "Einector",
    quote: "Leveraging data to uncover opportunities and helped renovating risks.",
    avatar: "RH",
  },
  {
    name: "Bennrn Statnin",
    title: "CEO Manager",
    quote: "Leveraging data to uncover variant opportunities and mimor risks.",
    avatar: "BS",
  },
  {
    name: "Rolan Mildson",
    title: "Orfied Manager",
    quote: "Leveraging data to uncover opportunities and mitigate anonitigate risks.",
    avatar: "RM",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                  <p className="text-primary-600 text-sm font-medium mb-2">
                    {testimonial.title}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}