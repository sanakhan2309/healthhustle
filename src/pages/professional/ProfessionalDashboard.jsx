import { motion } from 'framer-motion';
import { 
  Clock, 
  DollarSign, 
  Activity, 
  ClipboardList
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { professionalStats } from '../../data/enterpriseMock';
import { toast } from 'react-hot-toast';

const ProfStat = ({ title, value, change, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-[#0f172a] p-6 rounded-[2rem] border border-slate-800 shadow-xl"
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.15em]">{title}</p>
        <h3 className="text-2xl font-black text-white tracking-tight">{value}</h3>
      </div>
      <div className="text-emerald-500 text-xs font-bold">{change}</div>
    </div>
  </motion.div>
);

const ProfessionalDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter">My <span className="text-indigo-500">Practice</span></h1>
          <p className="text-slate-500 font-medium">Personal productivity and patient distribution metrics.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => toast.success('Leave Management Module Open')}
            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold border border-slate-700 transition-all"
          >
            Schedule Leave
          </button>
          <button 
            onClick={() => toast.success('Electronic Medical Records (EMR) System Loading...')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all"
          >
            Open EMR
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfStat title="Monthly Earnings" value="$14,280" change="+15%" icon={DollarSign} color="bg-emerald-500/10 text-emerald-500" />
        <ProfStat title="Hours Logged" value="164.5h" change="+12h" icon={Clock} color="bg-indigo-500/10 text-indigo-500" />
        <ProfStat title="Patient Score" value="4.9/5" change="+0.2" icon={Activity} color="bg-rose-500/10 text-rose-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#0f172a] p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white tracking-tight">Earnings Insights</h2>
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button className="px-4 py-1.5 text-xs font-bold bg-slate-800 text-white rounded-lg">Revenue</button>
              <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-300">Shifts</button>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={professionalStats}>
                <defs>
                  <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px' }}
                />
                <Area type="monotone" dataKey="earnings" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorEarnings)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0f172a] p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[60px] rounded-full" />
          <h2 className="text-xl font-bold text-white mb-6">Upcoming Schedule</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-4 group cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="text-xs font-black text-indigo-500">10:00</div>
                  <div className="w-[2px] h-12 bg-slate-800 my-1" />
                </div>
                <div className="flex-1 bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50 group-hover:border-indigo-500/50 transition-all">
                  <h4 className="text-sm font-bold text-white">General Consultation</h4>
                  <p className="text-xs text-slate-500 mt-1">Patient: Ali Khan</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-4 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 font-bold rounded-2xl transition-all flex items-center justify-center space-x-2">
            <ClipboardList className="w-4 h-4" />
            <span>Full Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
