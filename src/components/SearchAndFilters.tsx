import { useState } from 'react';
import { Search, MapPin, Clock } from 'lucide-react';

export default function SearchAndFilters({ onSearch }: {
  onSearch: (search: string, location: string, type: string) => void
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="flex items-center gap-2">
          <Search className="text-gray-500" />
          <input
            placeholder="Job title or keywords"
            className="p-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-gray-500" />
          <select
            className="p-2 w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option>New York, NY</option>
            <option>Remote</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-gray-500" />
          <select
            className="p-2 w-full"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">All Types</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
        </div>
        <button
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          onClick={() => onSearch(searchTerm, location, jobType)}
        >
          Search Jobs
        </button>
      </div>
    </div>
  );
}