import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop"
              alt="Ron Whitlock - Veteran Texas Broadcaster"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight mb-6">
              In-Depth Perspectives on Important Issues
            </h2>
            <p className="text-neutral-gray text-lg leading-relaxed mb-4">
              AIRING ON KUQI FOX38 in the Coastal Bend!!
            </p>
            <p className="text-neutral-gray text-lg leading-relaxed">
              Also catch us on TV 9 In the RGV1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}