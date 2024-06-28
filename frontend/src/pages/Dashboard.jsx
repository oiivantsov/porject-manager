import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Table from '../components/dashboard/Table';

const Dashboard = () => {
  const projectData = {
    headers: ['Due Date', 'Project Name', 'Status'],
    rows: [
      ['xx.xx.xxxx', 'Xxx', 'test']
    ]
  };

  const collaboratorData = {
    headers: ['Name', 'Status', 'Project'],
    rows: [
      ['Name1', 'Active', 'Test Pro'],
      ['Name2', 'Active', 'Test Pro'],
      ['Name3', 'Archived', 'Test Pro']
    ]
  };

  return (
    <div className="dashborad">
      <Sidebar />
      <div className="dashborad-main-content">
        <DashboardHeader />
        <Table title="My Projects" data={projectData} />
        <Table title="Collaborators" data={collaboratorData} />
      </div>
    </div>
  );
};

export default Dashboard;
