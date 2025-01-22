import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, X, Clock, User, Briefcase, Building } from 'lucide-react';
import { Application } from '../types/application';
import { getApplications } from '../services/applicationService';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedResume, setSelectedResume] = useState<string | null>(null);

  useEffect(() => {
    setApplications(getApplications());
  }, []);

  const viewResume = (resumeData: string) => {
    setSelectedResume(resumeData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <FileText className="w-8 h-8" />
        My Applications
      </h1>

      {applications.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">No applications submitted yet</p>
          <Link
            to="/jobs"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Browse Jobs
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {applications.map((application) => (
            <div
              key={application.appliedAt}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">
                    {application.jobTitle}
                  </h2>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" /> {application.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {application.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {new Date(application.appliedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{application.coverLetter}</p>
                </div>
                <div className="flex gap-4">
                  {application.resume && (
                    <button
                      onClick={() => viewResume(application.resume!)}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      View Resume
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedResume && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Resume Preview</h3>
              <button
                onClick={() => setSelectedResume(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={selectedResume}
								className="w-full border rounded-lg shadow-md"
                title="Resume Preview"
								style={{
							    minWidth: "800px", // Set a minimum width
							    minHeight: "1000px", // Set a minimum height
							    width: "100%", // Ensures it scales responsively
							    height: "auto", // Maintains proper scaling
							  }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}