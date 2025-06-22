import React from 'react';
import './Sidebar.css';

const menuItems = [
  { icon: '📊', label: 'Dashboard', isActive: true },
  { icon: '👥', label: 'Interns' },
  { icon: '🏢', label: 'Departments' },
  { icon: '📄', label: 'Documents' },
  { icon: '📈', label: 'Reports' },
];

export default function Sidebar() {
  return (
    <aside className="sidebarContainer">
      <div className="sidebarHeader">NavigationBar</div>
      <nav className="sidebarMenu">
        {menuItems.map(({ icon, label, isActive }) => (
          <button
            type="button"
            key={label}
            className={`sidebarMenuItem ${isActive ? 'active' : ''}`}
            
          >  
            <span className="menuIcon" >{icon}</span>
            <span className="menuLabel">{label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebarFooter">
        {/* <img
          src="https://i.pravatar.cc/40?u=hr-manager"
          alt="Alex Morgan"
          className="sidebarProfilePic"
        /> */}
        <div className="sidebarProfileInfo">
          <div className="sidebarProfileName"></div>
          <div className="sidebarProfileRole"></div>
        </div>
      </div>
    </aside>
  );
}