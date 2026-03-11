/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import SummaryCards from './components/SummaryCards';
import DeliverablesTable from './components/DeliverablesTable';
import Leaderboard from './components/Leaderboard';
import Accountability from './components/Accountability';
import TradingFloor from './components/TradingFloor';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Welcome back, Alex</h1>
              <p className="text-gray-500 mt-1">Here is what's happening with your pod today.</p>
            </div>
            <SummaryCards />
            <DeliverablesTable />
          </div>
        );
      case 'Deliverables':
        return (
          <div className="max-w-6xl mx-auto space-y-6">
            <DeliverablesTable />
          </div>
        );
      case 'Leaderboard':
        return <Leaderboard />;
      case 'Accountability':
        return <Accountability />;
      case 'Trading Floor':
        return <TradingFloor />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
}
