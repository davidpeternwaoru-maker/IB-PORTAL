import React from 'react';
import { Award, FileClock, CalendarCheck } from 'lucide-react';

export default function SummaryCards() {
  const summaries = [
    {
      title: 'Total Points',
      value: '1,250',
      subtitle: '+120 this week',
      icon: Award,
      trend: 'positive'
    },
    {
      title: 'Pending Deliverables',
      value: '3',
      subtitle: '2 require your review',
      icon: FileClock,
      trend: 'neutral'
    },
    {
      title: 'Next Check-in Date',
      value: 'Friday',
      subtitle: 'Due by 11:59 PM',
      icon: CalendarCheck,
      trend: 'neutral'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {summaries.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {item.title}
            </h3>
            <div className="p-2 bg-gray-50 rounded-md text-gray-400">
              <item.icon className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-auto">
            <p className="text-3xl font-semibold text-gray-900">{item.value}</p>
            <p className={`text-sm mt-1 font-medium ${
              item.trend === 'positive' ? 'text-emerald-600' : 'text-gray-500'
            }`}>
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
