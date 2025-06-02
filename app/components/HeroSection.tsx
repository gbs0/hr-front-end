'use client';

export default function HeroSection() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md mx-auto text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Simplificamos juntos</span>
              <span className="block text-indigo-600">
                Supply Chain | Industrial | Systems
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
