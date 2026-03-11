import React, { useState } from 'react';
import { Send, ArrowUpCircle, MessageSquare, Clock } from 'lucide-react';

const mockPosts = [
  {
    id: '1',
    author: 'Sarah Chen',
    avatar: 'sarahchen',
    timestamp: '2 hours ago',
    tag: 'Macro',
    content: 'The latest CPI print came in hotter than expected at 3.4% YoY. Core services ex-housing remains sticky. I think the Fed is going to hold rates higher for longer than the market is currently pricing in. Anyone looking at how this impacts the regional bank trade?',
    upvotes: 24,
    comments: 5
  },
  {
    id: '2',
    author: 'MD Reynolds',
    avatar: 'reynolds',
    timestamp: '5 hours ago',
    tag: 'Equities',
    content: 'Great discussion in the pod today regarding the software sector multiples. Remember that Rule of 40 is a baseline, but in this rate environment, free cash flow generation is being rewarded disproportionately over pure top-line growth. Adjust your DCFs accordingly.',
    upvotes: 42,
    comments: 12
  },
  {
    id: '3',
    author: 'James Wilson',
    avatar: 'jameswilson',
    timestamp: '1 day ago',
    tag: 'M&A',
    content: 'Just read through the merger proxy for the recent healthcare deal. The synergies they are projecting seem incredibly aggressive, especially on the SG&A side. I built a quick sensitivity table if anyone wants to take a look.',
    upvotes: 18,
    comments: 3
  }
];

export default function TradingFloor() {
  const [newPost, setNewPost] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">The Trading Floor</h1>
        <p className="text-gray-500 mt-1">Internal forum for market discussions, ideas, and updates.</p>
      </div>

      {/* Compose Post */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <textarea 
          className="w-full min-h-[100px] p-3 border-none focus:ring-0 text-gray-900 placeholder-gray-400 text-sm resize-none"
          placeholder="Post a market update or idea..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-2">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200 transition-colors"># Macro</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200 transition-colors"># Equities</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200 transition-colors"># M&A</span>
          </div>
          <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
            <Send className="w-4 h-4" />
            Post
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {mockPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 border border-gray-200 overflow-hidden shrink-0">
                  <img 
                    src={`https://picsum.photos/seed/${post.avatar}/100/100`} 
                    alt={post.author} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{post.author}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                    <Clock className="w-3 h-3" />
                    {post.timestamp}
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-semibold tracking-wide uppercase">
                {post.tag}
              </span>
            </div>
            
            <p className="text-sm text-gray-800 leading-relaxed mb-4">
              {post.content}
            </p>
            
            <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-slate-900 transition-colors group">
                <ArrowUpCircle className="w-5 h-5 group-hover:fill-slate-100" />
                <span className="text-sm font-medium">{post.upvotes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-500 hover:text-slate-900 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm font-medium">{post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
