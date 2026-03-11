import React, { useState } from 'react';
import { CheckCircle2, Mail, Award, Send } from 'lucide-react';

function ToggleSwitch({ checked, onChange, label }: { checked: boolean, onChange: () => void, label: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button 
        type="button"
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${
          checked ? 'bg-slate-900' : 'bg-gray-200'
        }`}
      >
        <span 
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`} 
        />
      </button>
    </div>
  );
}

export default function Accountability() {
  const [toggles, setToggles] = useState({
    reading: false,
    model: false,
    meeting: false,
  });
  const [notes, setNotes] = useState('');

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Accountability Partner</h1>
        <p className="text-gray-500 mt-1">Track weekly progress with your assigned partner.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Partner Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-md flex items-center justify-center overflow-hidden mb-4">
              <img 
                src="https://picsum.photos/seed/sarahchen/200/200" 
                alt="Sarah Chen" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Sarah Chen</h2>
            <p className="text-sm text-gray-500 mb-4">TMT Pod - Analyst</p>
            
            <div className="w-full flex items-center justify-center gap-2 py-2 bg-gray-50 rounded-lg border border-gray-100 mb-6">
              <Award className="w-5 h-5 text-slate-700" />
              <span className="text-sm font-semibold text-slate-900">1,450 Points</span>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
              <Mail className="w-4 h-4" />
              Message Partner
            </button>
          </div>
        </div>

        {/* Right Side: Check-in Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50/50">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Weekly Check-In
              </h3>
              <p className="text-sm text-gray-500 mt-1">Verify your partner's deliverables for the week.</p>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="space-y-2 mb-6">
                <ToggleSwitch 
                  label="Completed required reading (WSJ/FT)?" 
                  checked={toggles.reading} 
                  onChange={() => setToggles(p => ({ ...p, reading: !p.reading }))} 
                />
                <ToggleSwitch 
                  label="Submitted weekly financial model?" 
                  checked={toggles.model} 
                  onChange={() => setToggles(p => ({ ...p, model: !p.model }))} 
                />
                <ToggleSwitch 
                  label="Attended pod sync meeting?" 
                  checked={toggles.meeting} 
                  onChange={() => setToggles(p => ({ ...p, meeting: !p.meeting }))} 
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea 
                  className="w-full flex-1 min-h-[120px] p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-shadow resize-none"
                  placeholder="Any blockers or comments regarding your partner's progress..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="mt-6 flex justify-end">
                <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                  <Send className="w-4 h-4" />
                  Submit Check-in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
