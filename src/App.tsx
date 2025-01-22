import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import JobList from './pages/JobList';
import CompanyProfile from './pages/CompanyProfile';
import CompaniesList from './pages/CompaniesList';
import JobDetails from './pages/JobDetails';
import ApplicationsPage from './pages/ApplicationsPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/companies" element={<CompaniesList />} />
          <Route path="/companies/:id" element={<CompanyProfile />} />
          <Route path="/applications" element={<ApplicationsPage />} />
        </Routes>
      </main>
    </div>
  );
}