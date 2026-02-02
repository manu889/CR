'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { TourPackage } from '@/data/tours';
import { BUSINESS_INFO } from '@/data/constants';

type Props = {
  tours: TourPackage[];
};

type CategoryFilter = TourPackage['category'] | 'all';

type DaysFilter = 'any' | 1 | 2 | 3;

type BudgetFilter =
  | 'any'
  | 'under-4000'
  | '4000-7000'
  | '7000-12000'
  | '12000-plus';

type SortBy = 'recommended' | 'price-asc' | 'price-desc';

function normalize(text: string) {
  return text.trim().toLowerCase();
}

function buildWhatsAppLink(tour: TourPackage) {
  const whatsappNumber = BUSINESS_INFO.whatsapp.replace(/\D/g, '');
  const website = BUSINESS_INFO.website?.replace(/\/$/, '') ?? 'https://www.cabrentalmysore.com';
  const tourUrl = `${website}/tours/${tour.slug}`;

  const text = `Hi, I want to enquire about the tour package: ${tour.title}. Please share the best price and full itinerary. ${tourUrl}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function ToursFilter({ tours }: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [days, setDays] = useState<DaysFilter>('any');
  const [budget, setBudget] = useState<BudgetFilter>('any');
  const [sortBy, setSortBy] = useState<SortBy>('recommended');

  const filteredTours = useMemo(() => {
    const q = normalize(query);

    const inBudget = (price: number) => {
      switch (budget) {
        case 'under-4000':
          return price < 4000;
        case '4000-7000':
          return price >= 4000 && price <= 7000;
        case '7000-12000':
          return price > 7000 && price <= 12000;
        case '12000-plus':
          return price > 12000;
        default:
          return true;
      }
    };

    const inDays = (tourDays: number) => {
      if (days === 'any') return true;
      if (days === 1) return tourDays === 1;
      if (days === 2) return tourDays === 2;
      return tourDays >= 3;
    };

    const base = tours
      .filter((t) => (category === 'all' ? true : t.category === category))
      .filter((t) => inDays(t.days))
      .filter((t) => inBudget(t.price))
      .filter((t) => {
        if (!q) return true;
        const haystack = normalize([t.title, t.description, ...t.destinations].join(' '));
        return haystack.includes(q);
      });

    const sorted = [...base];
    if (sortBy === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') sorted.sort((a, b) => b.price - a.price);

    return sorted;
  }, [budget, category, days, query, sortBy, tours]);

  const hasActiveFilters =
    query.trim().length > 0 || category !== 'all' || days !== 'any' || budget !== 'any' || sortBy !== 'recommended';

  return (
    <section className="py-10 bg-white">
      <div className="container-custom">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Find the right tour package</h2>
              <p className="text-sm text-gray-600 mt-1">
                Filter by category, duration, and destination — then enquire instantly on WhatsApp.
              </p>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setCategory('all');
                  setDays('any');
                  setBudget('any');
                  setSortBy('recommended');
                }}
                className="text-sm font-semibold text-amber-700 hover:text-amber-800"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-5">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Search</label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by Ooty, Coorg, Wayanad, Tirupati..."
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-amber-500/40"
              />
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryFilter)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-amber-500/40"
              >
                <option value="all">All tour packages</option>
                <option value="one-day">One day tours</option>
                <option value="weekend">Weekend getaways</option>
                <option value="multi-day">Multi-day packages</option>
                <option value="pilgrimage">Pilgrimage tours</option>
                <option value="adventure">Adventure tours</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Duration</label>
              <select
                value={days}
                onChange={(e) => setDays((e.target.value === 'any' ? 'any' : Number(e.target.value)) as DaysFilter)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-amber-500/40"
              >
                <option value="any">Any</option>
                <option value="1">1 day</option>
                <option value="2">2 days</option>
                <option value="3">3+ days</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1">Budget</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value as BudgetFilter)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-amber-500/40"
              >
                <option value="any">Any</option>
                <option value="under-4000">Under ₹4,000</option>
                <option value="4000-7000">₹4,000 – ₹7,000</option>
                <option value="7000-12000">₹7,000 – ₹12,000</option>
                <option value="12000-plus">₹12,000+</option>
              </select>
            </div>

            <div className="md:col-span-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-sm text-gray-700">
                  <span className="font-bold text-gray-900">{filteredTours.length}</span> packages found
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-xs font-semibold text-gray-700">Sort</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortBy)}
                    className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-amber-500/40"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTours.slice(0, 9).map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-gray-900 leading-snug">{tour.title}</h3>
                      <p className="text-xs text-gray-600 mt-1">{tour.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-amber-700">₹{tour.price.toLocaleString()}</div>
                      <div className="text-[11px] text-gray-500">Starting</div>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {tour.destinations.slice(0, 3).map((d) => (
                      <span
                        key={d}
                        className="text-[11px] px-2 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-100"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm text-gray-600">{tour.description}</p>

                  <div className="mt-4 flex items-center gap-2">
                    <Link href={`/tours/${tour.slug}`} className="flex-1 btn-outline text-center text-sm py-2">
                      Details
                    </Link>
                    <a
                      href={buildWhatsAppLink(tour)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center text-sm py-2 rounded-lg font-semibold transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTours.length > 9 && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Showing 9 results. Use filters above to narrow down more.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
