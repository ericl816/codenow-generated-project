import { useParams } from 'react-router-dom';
import { companies, jobs } from '../data';
import JobCard from '../components/JobCard';

export default function CompanyProfile() {
  const { id } = useParams<{ id: string }>();
  const company = companies.find(c => c.id === id);
  const companyJobs = jobs.filter(job => job.companyId === id);

  if (!company) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-red-600 mb-4">Company not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold mb-4">{company.name}</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">{company.description}</p>
            <div className="space-y-2">
              <p><strong>Industry:</strong> {company.industry}</p>
              <p><strong>Location:</strong> {company.location}</p>
              <p><strong>Company Size:</strong> {company.employees}</p>
              <a href={company.website} className="text-blue-600 hover:underline">
                Visit Website
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Open Positions</h2>
            <div className="space-y-4">
              {companyJobs.length > 0 ? (
                companyJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <p className="text-gray-600">No current openings</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}