export default function TranscriptsPage() {
  const transcripts = [
    {
      title: 'Trump Claims Disputed by Cuellar',
      date: 'Recent Episode',
    },
    {
      title: 'Senator files Bill to Expedite 2nd Bridge for SPI',
      date: 'Recent Episode',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            TRANSCRIPTS
          </h1>
          <p className="text-lg text-gray-700">
            Read transcripts from Ron Whitlock Reports episodes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {transcripts.map((transcript, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {transcript.title}
                  </h3>
                  <p className="text-gray-600">{transcript.date}</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                  Read Transcript
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
