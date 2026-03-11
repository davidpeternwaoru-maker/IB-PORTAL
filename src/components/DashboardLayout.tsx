import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Trophy, 
  Users, 
  LineChart, 
  Bell, 
  Search,
  PanelLeftClose
} from 'lucide-react';

interface DashboardLayoutProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: React.ReactNode;
}

export default function DashboardLayout({ activeTab, setActiveTab, children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Deliverables', icon: FileText },
    { name: 'Leaderboard', icon: Trophy },
    { name: 'Accountability', icon: Users },
    { name: 'Trading Floor', icon: LineChart },
  ];

  return (
    <div className="h-screen w-full flex overflow-hidden bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out z-20 shrink-0`}
      >
        <div className="h-16 flex items-center justify-center border-b border-gray-200 px-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xl tracking-tight overflow-hidden whitespace-nowrap">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white shrink-0">
              IB
            </div>
            <span className={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
              Portal
            </span>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-gray-100 text-slate-900' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-slate-900'
                } ${!isSidebarOpen && 'justify-center'}`}
                title={!isSidebarOpen ? item.name : undefined}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className={`transition-opacity duration-300 whitespace-nowrap ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-md hover:bg-gray-100"
            >
              <PanelLeftClose className={`w-5 h-5 transition-transform duration-300 ${!isSidebarOpen && 'rotate-180'}`} />
            </button>
            <div className="hidden md:flex items-center text-gray-400 focus-within:text-gray-600 w-80 relative">
              <Search className="w-4 h-4 absolute ml-3 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Search reports, users, or discussions..." 
                className="w-full pl-9 pr-4 py-1.5 bg-gray-50 border border-transparent rounded-md text-sm focus:border-gray-300 focus:bg-white focus:ring-0 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="text-gray-400 hover:text-gray-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="h-6 w-px bg-gray-200"></div>
            
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900 leading-none">Alex Mercer</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Analyst</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-200 border border-gray-300 flex items-center justify-center overflow-hidden shrink-0">
                <img 
                  src="https://picsum.photos/seed/alex/100/100" 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
