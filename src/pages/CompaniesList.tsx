import { Link } from 'react-router-dom';
import { companies } from '../data';

export default function CompaniesList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Companies</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {companies.map(company => (
          <div key={company.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  <Link to={`/companies/${company.id}`} className="hover:text-blue-600">
                    {company.name}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{company.description}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{company.industry}</span>
                  <span>•</span>
                  <span>{company.location}</span>
                  <span>•</span>
                  <span>{company.employees} employees</span>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {company.jobsPosted} open positions
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}