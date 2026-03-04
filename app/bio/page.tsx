export default function BioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            RON'S BIO
          </h1>
          <p className="text-lg text-gray-700">
            Learn more about veteran Texas broadcaster Ron Whitlock
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ron Whitlock Reports
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Veteran Texas Broadcaster Ron Whitlock holds roundtable discussions, interviews, and legislative updates, in studio and on location in this independently produced TV program with in-depth perspectives on important issues.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">WHERE TO WATCH?</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-900 font-semibold">
                  AIRING ON KUQI FOX38 in the Coastal Bend!!
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-900 font-semibold">
                  Also catch us on TV 9 In the RGV1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
