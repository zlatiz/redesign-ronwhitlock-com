import Image from "next/image";

export default function BioPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-white text-center">
            <span className="brush-stroke">RON&apos;S BIO</span>
          </h1>
        </div>
      </div>

      {/* Bio Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
              alt="Ron Whitlock - Veteran Texas Broadcaster"
              fill
              className="object-cover"
            />
          </div>

          {/* Bio Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Ron Whitlock
            </h2>
            <p className="text-xl text-accent-purple font-medium">
              Veteran Texas Broadcaster
            </p>
            <div className="prose prose-lg text-neutral-gray">
              <p>
                Veteran Texas Broadcaster Ron Whitlock holds roundtable discussions, 
                interviews, and legislative updates, in studio and on location in this 
                independently produced TV program with in-depth perspectives on important issues.
              </p>
              <p>
                With decades of experience in Texas broadcasting, Ron brings a unique 
                perspective to the coverage of local, state, and national issues that 
                matter to Texans.
              </p>
              <p>
                Ron Whitlock Reports airs on KUQI FOX38 in the Coastal Bend and on 
                TV 9 in the RGV, bringing in-depth journalism to communities across 
                South Texas.
              </p>
            </div>

            {/* Where to Watch */}
            <div className="bg-neutral-100 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-black mb-4">WHERE TO WATCH?</h3>
              <ul className="space-y-2 text-neutral-gray">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-purple rounded-full mr-3"></span>
                  AIRING ON KUQI FOX38 in the Coastal Bend!!
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-purple rounded-full mr-3"></span>
                  Also catch us on TV 9 In the RGV1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The Shepherd Group */}
      <div className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">The Shepherd Group</h3>
          <p className="text-neutral-muted">
            Ron Whitlock Reports is produced by The Shepherd Group, dedicated to 
            bringing quality independent journalism to Texas communities.
          </p>
        </div>
      </div>
    </div>
  );
}