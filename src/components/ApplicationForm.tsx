import { useState } from 'react';
import { User, Mail, FileText, AlertCircle } from 'lucide-react';
import { saveApplication } from '../services/applicationService';

export default function ApplicationForm({ jobId }: { jobId: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null as File | null,
    coverLetter: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.resume?.name.endsWith('.pdf')) {
      setError('Please upload a PDF file');
      return;
    }

    try {
      await saveApplication({
        jobId,
        ...formData
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({ name: '', email: '', resume: null, coverLetter: '' });
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FileText className="w-6 h-6 text-blue-600" />
        Apply for this Position
      </h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
          ✓ Application submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Resume (PDF only)</label>
          <div className="flex items-center gap-4">
            <label className="flex-1 cursor-pointer">
              <input
                type="file"
                accept=".pdf"
                required
                className="sr-only"
                onChange={e => setFormData({ 
                  ...formData, 
                  resume: e.target.files?.[0] || null 
                })}
              />
              <div className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">
                  {formData.resume?.name || 'Click to upload resume'}
                </span>
              </div>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
          <textarea
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
            placeholder="Write your cover letter here..."
            value={formData.coverLetter}
            onChange={e => setFormData({ ...formData, coverLetter: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}