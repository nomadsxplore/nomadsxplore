import Image from 'next/image';

type Tour = {
  name: string;
  image: string;
  description: string;
  price: string;
  duration: string;
};

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
      <Image
        src={tour.image}
        alt={tour.name}
        width={600}       // adjust width and height as per your layout
        height={224}      // (keeping aspect ratio similar to h-56)
        className="w-full object-cover"
      />
      <div className="p-4">
      <h2 className="text-xl font-bold text-gray-900">{tour.name}</h2>
        <p className="text-sm text-gray-600 mt-1">{tour.description}</p>
        <div className="mt-3 text-sm text-gray-700">
          <span className="block">{tour.duration}</span>
          <span className="block font-semibold">{tour.price}</span>
        </div>
      </div>
    </div>
  );
}
