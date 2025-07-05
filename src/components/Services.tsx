'use client';

import {
  FaBriefcase,
  FaRegFileAlt,
  FaChartBar,
  FaBinoculars,
  FaSun,
  FaCalendarAlt,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaBriefcase size={20} />,
    title: 'Lorem Ipsum',
    description:
      'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  },
  {
    icon: <FaRegFileAlt size={20} />,
    title: 'Dolor Sitema',
    description:
      'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    icon: <FaChartBar size={20} />,
    title: 'Sed ut perspiciatis',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    icon: <FaBinoculars size={20} />,
    title: 'Magni Dolores',
    description:
      'Exceptetur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    icon: <FaSun size={20} />,
    title: 'Nemo Enim',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
  },
  {
    icon: <FaCalendarAlt size={20} />,
    title: 'Eiusmod Tempor',
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#f4fafd] text-[#202020]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Services</h2>
          <div className="w-24 h-1 bg-cyan-500 mb-6" />
          <p className="max-w-4xl">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-cyan-600 text-white rounded-full p-4 flex items-center justify-center w-12 h-12">
                {service.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
