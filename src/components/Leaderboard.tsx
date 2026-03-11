import React from 'react';
import { Medal } from 'lucide-react';

const mockLeaderboard = [
  { id: '1', rank: 1, name: 'Sarah Chen', pod: 'TMT - MD Reynolds', points: 1450 },
  { id: '2', rank: 2, name: 'James Wilson', pod: 'Healthcare - MD Gupta', points: 1320 },
  { id: '3', rank: 3, name: 'Alex Mercer', pod: 'TMT - MD Reynolds', points: 1250 },
  { id: '4', rank: 4, name: 'Michael Chang', pod: 'Consumer - MD Smith', points: 1180 },
  { id: '5', rank: 5, name: 'Emma Davis', pod: 'Industrials - MD Vance', points: 1050 },
  { id: '6', rank: 6, name: 'David Kim', pod: 'Healthcare - MD Gupta', points: 980 },
];

export default function Leaderboard() {
  const getRankBadge = (rank: number) => {
    if (rank === 1) return <div className="flex items-center gap-1.5 text-yellow-600 font-bold"><Medal className="w-5 h-5" /> 1st</div>;
    if (rank === 2) return <div className="flex items-center gap-1.5 text-slate-400 font-bold"><Medal className="w-5 h-5" /> 2nd</div>;
    if (rank === 3) return <div className="flex items-center gap-1.5 text-amber-700 font-bold"><Medal className="w-5 h-5" /> 3rd</div>;
    return <span className="text-gray-500 font-medium ml-2">{rank}</span>;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Global Leaderboard</h1>
        <p className="text-gray-500 mt-1">Top performing analysts across all pods.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-24">Rank</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Analyst Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">MD Pod</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Total Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockLeaderboard.map((user) => (
                <tr 
                  key={user.id} 
                  className={`transition-colors hover:bg-gray-50 ${user.rank <= 3 ? 'bg-slate-50/50' : ''}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getRankBadge(user.rank)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 border border-gray-300 flex items-center justify-center overflow-hidden shrink-0">
                        <img 
                          src={`https://picsum.photos/seed/${user.name.replace(' ', '')}/100/100`} 
                          alt={user.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{user.pod}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm font-bold text-slate-900">{user.points.toLocaleString()}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
