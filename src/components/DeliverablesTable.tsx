import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

// Mock data matching the Prisma schema
const mockDeliverables = [
  {
    id: 'del_1',
    title: 'Q3 Macroeconomic Outlook',
    author: 'Alex Mercer',
    status: 'APPROVED',
    score: 95,
    date: 'Oct 24, 2026'
  },
  {
    id: 'del_2',
    title: 'Tech Sector M&A Analysis',
    author: 'Sarah Chen',
    status: 'PENDING_MD',
    score: 88,
    date: 'Oct 26, 2026'
  },
  {
    id: 'del_3',
    title: 'Healthcare LBO Model',
    author: 'James Wilson',
    status: 'PENDING_ASSOCIATE',
    score: null,
    date: 'Oct 28, 2026'
  },
  {
    id: 'del_4',
    title: 'Consumer Retail Pitch Deck',
    author: 'Alex Mercer',
    status: 'DRAFT',
    score: null,
    date: 'Oct 29, 2026'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'APPROVED':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">Approved</span>;
    case 'PENDING_MD':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">Pending MD</span>;
    case 'PENDING_ASSOCIATE':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">Pending Associate</span>;
    case 'DRAFT':
    default:
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">Draft</span>;
  }
};

export default function DeliverablesTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Table Header Area */}
      <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Deliverables</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and review submitted reports.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          Upload Report
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Score</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockDeliverables.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">{item.title}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-600">{item.author}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(item.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">
                    {item.score ? `${item.score}/100` : '-'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{item.date}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
