import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Banknote, ArrowLeft, FileText, CheckCircle } from 'lucide-react';
import ApplicationModal from '../components/ApplicationModal';
import { jobs } from '../data';

export default function JobDetails() {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Job Not Found</h2>
          <Link 
            to="/jobs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Job Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          to="/jobs" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Jobs
        </Link>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex items-start gap-6 mb-8">
          <div className="bg-blue-100 p-4 rounded-lg">
            <Briefcase className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="flex items-center gap-1">
                <Briefcase className="w-5 h-5" /> {job.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-5 h-5" /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Banknote className="w-5 h-5" /> {job.salary}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-5 h-5" /> {job.type}
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Apply Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Benefits</h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ApplicationModal 
        jobId={job.id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}