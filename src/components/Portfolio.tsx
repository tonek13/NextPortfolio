'use client';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-white text-[#202020]">
      <div className="max-w-6xl mx-auto text-left">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-24 h-1 bg-cyan-500 mx mb-6" />
          <p className="mb-8 text-lg">
          This page is still under construction, especially since most of my projects are private web applications.
        </p>

        {/* Responsive Video */}
         <div className="-mx-4 md:mx-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/under-construction.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
