'use client';

import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa6';


export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#ffffff] text-[#202020]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">About</h2>
          <div className="w-24 h-1 bg-cyan-500 mb-6" />
          <p className="max-w-4xl">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="/hero-bg.png"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Info */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-2">UI/UX Designer & Web Developer.</h3>
            <p className="italic mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
              {[
                ['Birthday', '1 May 1995'],
                ['Website', 'www.example.com'],
                ['Phone', '+123 456 7890'],
                ['City', 'New York, USA'],
                ['Age', '30'],
                ['Degree', 'Master'],
                ['Email', 'email@example.com'],
                ['Freelance', 'Available'],
              ].map(([label, value], i) => (
                <p key={i} className="flex items-start gap-2">
                  <FaChevronRight className="mt-1 text-cyan-500" size={12} />
                  <span>
                    <strong className="font-medium">{label}:</strong> {value}
                  </span>
                </p>
              ))}
            </div>

            <p>
              Officiis eligendi itaque labore et dolor... Cupiditate ut dicta maxime officiis quidem...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
