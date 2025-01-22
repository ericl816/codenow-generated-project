import { Briefcase, MapPin, Clock, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Job } from '../data';

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <Briefcase className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">
            <Link to={`/jobs/${job.id}`} className="hover:text-blue-600">
              {job.title}
            </Link>
          </h3>
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {job.company}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {job.type}
            </span>
            <span className="flex items-center gap-1">
              <Banknote className="w-4 h-4" /> {job.salary}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{job.posted}</span>
            <Link 
              to={`/jobs/${job.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}