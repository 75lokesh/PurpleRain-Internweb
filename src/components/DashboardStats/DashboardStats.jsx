import React from 'react';
import './DashboardStats.css';

const statItems = [
  {
    label: 'Total Interns',
    icon: '👥',
    getValue: ({ totalInterns }) => totalInterns,
    color: '#0077cc',
  },
  {
    label: 'Completed',
    icon: '✔️',
    getValue: ({ completed }) => completed,
    color: '#00a859',
  },
  {
    label: 'Onboarding',
    icon: '⏳',
    getValue: ({ onboarding }) => onboarding,
    color: '#7a00cc',
  },
  {
    label: 'Pending Docs',
    icon: '⚠️',
    getValue: ({ pendingDocs }) => pendingDocs,
    color: '#ff9933',
  },
];

export default function DashboardStats(props) {
  return (
    <section className="dashboardStatsContainer">
      {statItems.map(({ label, icon, getValue, color }) => (
        <div key={label} className="statBox">
          <div className="statIcon" style={{ color }}>
            {icon}
          </div>
          <div className="statValue">{getValue(props)}</div>
          <div className="statLabel">{label}</div>
        </div>
      ))}
    </section>
  );
}