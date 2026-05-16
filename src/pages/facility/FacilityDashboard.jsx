import { motion } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity, 
  ChevronRight,
  UserPlus
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { facilityStats, facilityStaff } from '../../data/enterpriseMock';

import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, change, icon: Icon, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-[#0f172a] p-6 rounded-[2rem] border border-slate-800 shadow-xl"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex items-center space-x-1 px-2 py-1 bg-emerald-500/10 rounded-lg">
        <TrendingUp className="w-3 h-3 text-emerald-500" />
        <span className="text-xs font-bold text-emerald-500">{change}</span>
      </div>
    </div>
    <h3 className="text-3xl font-black text-white mb-1 tracking-tight">{value}</h3>
    <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{title}</p>
  </motion.div>
);

const FacilityDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter">Enterprise <span className="text-emerald-500">Overview</span></h1>
          <p className="text-slate-500 font-medium">Real-time facility performance and resource management.</p>
        </div>
        <button 
          onClick={() => navigate('/facility/staff')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center space-x-2 transition-all shadow-lg shadow-emerald-600/20"
        >
          <UserPlus className="w-5 h-5" />
          <span>Add New Staff</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="$284.5k" change="+12.5%" icon={DollarSign} color="bg-emerald-500/10 text-emerald-500" />
        <StatCard title="Active Patients" value="1,240" change="+8.2%" icon={Users} color="bg-blue-500/10 text-blue-500" />
        <StatCard title="Avg Occupancy" value="84%" change="+4.1%" icon={Activity} color="bg-indigo-500/10 text-indigo-500" />
        <StatCard title="Critical Alerts" value="03" change="-2" icon={Activity} color="bg-rose-500/10 text-rose-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#0f172a] p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white tracking-tight">Financial Performance</h2>
            <select className="bg-slate-900 border border-slate-800 text-xs font-bold p-2 rounded-xl text-slate-400 focus:outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={facilityStats}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px' }}
                  itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0f172a] p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6">Staff Status</h2>
          <div className="space-y-6">
            {facilityStaff.map((staff) => (
              <div key={staff.id} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-emerald-500/50 transition-all">
                    <Users className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-500 transition-colors">{staff.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{staff.specialty}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${
                    staff.status === 'On Duty' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {staff.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center space-x-2">
            <span>View Full Directory</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityDashboard;
