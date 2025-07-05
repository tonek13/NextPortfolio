'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="container mx-auto px-6 md:px-20">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            Alex Smith
          </h1>
          <h2 className="text-2xl md:text-3xl font-light">
            I&apos;m{' '}
            <span className="text-cyan-400 font-semibold">
              <Typewriter
                words={['Developer', 'Freelancer', 'Designer']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
