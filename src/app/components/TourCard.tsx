// src/components/TourCard.tsx

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
        <img src={tour.image} alt={tour.name} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{tour.name}</h2>
          <p className="text-sm text-gray-600 mt-1">{tour.description}</p>
          <div className="mt-3 text-sm text-gray-700">
            <span className="block">{tour.duration}</span>
            <span className="block font-semibold">{tour.price}</span>
          </div>
        </div>
      </div>
    );
  }
  