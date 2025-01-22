import { Link } from 'react-router-dom';
import { Home, Briefcase, Building, User, FileText } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <Home className="w-6 h-6" />
            <span className="text-xl font-bold">JobBoard</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/jobs" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
              <Briefcase className="w-5 h-5" />
              Jobs
            </Link>
            <Link to="/companies" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
              <Building className="w-5 h-5" />
              Companies
            </Link>
            <Link to="/applications" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
              <FileText className="w-5 h-5" />
              Applications
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}