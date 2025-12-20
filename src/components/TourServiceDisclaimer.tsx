export default function TourServiceDisclaimer() {
  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-blue-900 mb-3">
            ✅ Taxi Service Only - Important Information
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-semibold text-blue-900">
              This package includes ONLY comfortable taxi/cab transportation services.
            </p>
            <ul className="space-y-1.5 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>We provide professional drivers and well-maintained AC vehicles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>All fuel, parking, and toll charges are included in taxi fare</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span className="font-medium">Hotel/accommodation bookings - NOT included (arrange separately)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span className="font-medium">Entry tickets to monuments/attractions - NOT included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span className="font-medium">Meals, food, and beverages - NOT included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">✗</span>
                <span className="font-medium">Guide services, activities, or tours - NOT included</span>
              </li>
            </ul>
            <p className="mt-3 text-blue-900 font-semibold">
              💡 We focus exclusively on providing reliable, comfortable taxi transportation to make your journey hassle-free!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
