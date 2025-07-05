'use client';

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 bg-[#f4fafd] text-[#202020]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Resume</h2>
          <div className="w-24 h-1 bg-cyan-500 mb-6" />
          <p className="max-w-4xl">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            {/* Summary */}
            <h3 className="text-xl font-bold mb-4">Summary</h3>
            <div className="relative border-l-2 border-cyan-500 pl-6 mb-10">
              <h4 className="text-lg font-bold">BRANDON JOHNSON</h4>
              <p className="italic text-sm text-gray-600 mb-3">
                Innovative and deadline-driven Graphic Designer with 3+ years of experience...
              </p>
              <ul className="list-disc pl-5 text-sm">
                <li>Portland par 127, Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>

            {/* Education */}
            <h3 className="text-xl font-bold mb-4">Education</h3>

            {/* Degree 1 */}
            <div className="relative border-l-2 border-cyan-500 pl-6 mb-8">
              <h4 className="font-bold text-sm">MASTER OF FINE ARTS & GRAPHIC DESIGN</h4>
              <p className="text-xs text-gray-600">2015 - 2016</p>
              <p className="italic text-sm mb-2">Rochester Institute of Technology, Rochester, NY</p>
              <p className="text-sm">
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam...
              </p>
            </div>

            {/* Degree 2 */}
            <div className="relative border-l-2 border-cyan-500 pl-6">
              <h4 className="font-bold text-sm">BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h4>
              <p className="text-xs text-gray-600">2010 - 2014</p>
              <p className="italic text-sm mb-2">Rochester Institute of Technology</p>
              <p className="text-sm">
                Voluptatem accusantium doloremque laudantium, totam rem aperiam...
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-xl font-bold mb-4">Professional Experience</h3>

            {/* Experience 1 */}
            <div className="relative border-l-2 border-cyan-500 pl-6 mb-10">
              <h4 className="font-bold text-sm">SENIOR GRAPHIC DESIGN SPECIALIST</h4>
              <p className="text-xs text-gray-600">2019 - Present</p>
              <p className="italic text-sm mb-2">Experion, New York, NY</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Lead in the design, development, and implementation of the graphic materials</li>
                <li>Delegate tasks to the 7 members of the design team</li>
                <li>Supervise assessment of materials to ensure quality and accuracy</li>
                <li>Manage production budgets from $2,000 – $25,000</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="relative border-l-2 border-cyan-500 pl-6">
              <h4 className="font-bold text-sm">GRAPHIC DESIGN SPECIALIST</h4>
              <p className="text-xs text-gray-600">2017 - 2018</p>
              <p className="italic text-sm mb-2">Stepping Stone Advertising, New York, NY</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Developed marketing programs (logos, brochures, infographics...)</li>
                <li>Recommended design concepts to improve results</li>
                <li>Reviewed and approved all graphic production materials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
