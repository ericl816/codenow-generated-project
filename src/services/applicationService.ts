// applicationService.ts
interface StoredApplication {
  jobId: string;
  jobTitle: string;
  company: string;
  name: string;
  email: string;
  resume: string; // Base64 string
  coverLetter: string;
  appliedAt: string;
}

export const saveApplication = async (application: Omit<StoredApplication, 'appliedAt'>) => {
  const applications = JSON.parse(localStorage.getItem('applications') || '[]');
  const newApplication = {
    ...application,
    appliedAt: new Date().toISOString()
  };
  localStorage.setItem('applications', JSON.stringify([...applications, newApplication]));
  return newApplication;
};

export const getApplications = (): StoredApplication[] => {
  try {
    return JSON.parse(localStorage.getItem('applications') || '[]');
  } catch (error) {
    console.error('Error loading applications:', error);
    return [];
  }
};