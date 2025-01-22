import { useState } from 'react';
import { Job, jobs } from '../data';
import JobCard from '../components/JobCard';
import SearchAndFilters from '../components/SearchAndFilters';

export default function JobList() {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  const handleSearch = (search: string, location: string, type: string) => {
    const filtered = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase());
      const matchesLocation = location ? job.location === location : true;
      const matchesType = type ? job.type === type : true;
      return matchesSearch && matchesLocation && matchesType;
    });
    setFilteredJobs(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Job Opportunities</h1>
      <SearchAndFilters onSearch={handleSearch} />
      
      <div className="mt-8 space-y-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">No jobs found matching your criteria</p>
          </div>
        ) : (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </div>
    </div>
  );
}