import React, { useState } from 'react';
import Sidebar from './components/Sidebarfolder/Sidebar.jsx'
import Header from './components/Header/Header';
import DashboardStats from "./components/DashboardStats/DashboardStats.jsx";
import Filters from './components/Filters/Filters';
import InternCard from './components/InternCard/InternCard';

import './App.css';

// Example interns data
const initialInterns = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    department: 'Engineering',
    startDate: '2023-05-15',
    status: 'Completed',
    documentsStatus: { Resume: false, 'Gov ID': false, Agreement: false, 'Joining Letter': false },
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    department: 'Design',
    startDate: '2023-06-02',
    status: 'Onboarding',
    documentsStatus: { Resume: false, 'Gov ID': false, Agreement: false, 'Joining Letter': false },
    avatar: 'https://i.pravatar.cc/150?img=16',
  },
  {
    id: 3,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    department: 'Marketing',
    startDate: '2023-06-10',
    status: 'Pending Docs',
    documentsStatus: { Resume: false, 'Gov ID': false, Agreement: false, 'Joining Letter': false },
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    department: 'Finance',
    startDate: '2023-04-20',
    status: 'Completed',
    documentsStatus: { Resume: false, 'Gov ID': false, Agreement: false, 'Joining Letter': false },
    avatar: 'https://i.pravatar.cc/150?img=25',
  },
  {
    id: 5,
    name: 'James Thompson',
    email: 'james.thompson@example.com',
    department: 'Engineering',
    startDate: '2023-06-05',
    status: 'Onboarding',
    documentsStatus: { Resume: false, 'Gov ID': false, Agreement: false, 'Joining Letter': false },
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 6,
    name: 'Sophia Lee',
    email: 'sophia.lee@example.com',
    department: 'Design',
    startDate: '2023-06-15',
    status: 'Pending Docs',
    documentsStatus: { Resume: false, 'Gov ID': false, Agreement: false, 'Joining Letter': false },
    avatar: 'https://i.pravatar.cc/150?img=3',
  }
];

const departments = ['All Departments', 'Engineering', 'Design', 'Marketing', 'Finance'];
const statuses = ['All Status', 'Completed', 'Onboarding', 'Pending Docs'];

 function App() {
  const [interns, setInterns] = useState(initialInterns);
  const [filterDept, setFilterDept] = useState('All Departments');
  const [filterStatus, setFilterStatus] = useState('All Status');

  // Handle document upload and update that document status to true
  const handleDocumentUpload = (internId, documentName) => {
    setInterns(prev =>
      prev.map(intern => {
        if (intern.id === internId) {
          return {
            ...intern,
            documentsStatus: {
              ...intern.documentsStatus,
              [documentName]: true,
            },
          };
        }
        return intern;
      }),
    );
  };

  // Count summary boxes values
  const totalInterns = interns.length;
  const completed = interns.filter(i => i.status === 'Completed').length;
  const onboarding = interns.filter(i => i.status === 'Onboarding').length;
  const pendingDocs = interns.filter(i => i.status === 'Pending Docs').length;

  // Filter interns before showing
  const filteredInterns = interns.filter(intern => {
    return (
      (filterDept === 'All Departments' || intern.department === filterDept) &&
      (filterStatus === 'All Status' || intern.status === filterStatus)
    );
  });

  return (
    <div className="appContainer">
      <div class="Sidebar"><Sidebar /></div>
      <main className="mainContent">
        <Header />
        <div className="dashboardContainer">
          <DashboardStats
            totalInterns={totalInterns}
            completed={completed}
            onboarding={onboarding}
            pendingDocs={pendingDocs}
          />
          <Filters
            departments={departments}
            statuses={statuses}
            filterDept={filterDept}
            setFilterDept={setFilterDept}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
          <section className="internsGrid">
            {filteredInterns.length === 0 ? (
              <p className="noInternsMsg">No interns found for selected filters.</p>
            ) : (
              filteredInterns.map(intern => (
                <InternCard key={intern.id} intern={intern} onDocumentUpload={handleDocumentUpload} />
              ))
            )}
          </section>
          <p className="footerInfo">
            Showing {filteredInterns.length} of {totalInterns} interns
          </p>
        </div>
        <footer className="footerBar">
          © 2025 PurpleRain. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;

