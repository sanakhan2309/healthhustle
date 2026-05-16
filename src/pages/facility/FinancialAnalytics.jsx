import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Cell,
  Pie
} from 'recharts';
import { facilityStats } from '../../data/enterpriseMock';
import { toast } from 'react-hot-toast';
import { cn } from '../../utils/cn';
import { useState } from 'react';

const COLORS = ['#10b981', '#6366f1', '#f59e0b', '#ef4444'];
const distributionData = [
  { name: 'Consultations', value: 45 },
  { name: 'Surgeries', value: 30 },
  { name: 'Diagnostics', value: 15 },
  { name: 'Pharmacy', value: 10 },
];

const FinancialAnalytics = () => {
  const [timeRange, setTimeRange] = useState('6 Months');

  const handleExport = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Generating Financial Report...',
        success: 'Report Exported (CSV)',
        error: 'Failed to generate report',
      }
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter">Financial <span className="text-emerald-500">Analytics</span></h1>
          <p className="text-slate-500 font-medium">Deep dive into revenue streams, expenses, and growth metrics.</p>
        </div>
        <div className="flex items-center gap-4">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-xs font-black uppercase p-4 rounded-2xl text-slate-400 focus:outline-none hover:border-emerald-500/50 transition-all appearance-none pr-10 relative"
          >
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
          <button 
            onClick={handleExport}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all group"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            <span>Export Reports</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Revenue', value: '$842,500', change: '+14.2%', up: true, icon: DollarSign, color: 'text-emerald-500' },
          { title: 'Avg. Checkup', value: '$120.50', change: '-2.1%', up: false, icon: Calendar, color: 'text-blue-500' },
          { title: 'Operational Cost', value: '$240,000', change: '+5.4%', up: false, icon: TrendingDown, color: 'text-rose-500' },
          { title: 'Net Profit', value: '$602,500', change: '+18.7%', up: true, icon: TrendingUp, color: 'text-indigo-500' },
        ].map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#0f172a] p-6 rounded-[2rem] border border-slate-800 shadow-xl group hover:border-emerald-500/20 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50">
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
              <div className={cn(
                "flex items-center space-x-1 px-2 py-1 rounded-lg text-[10px] font-black",
                stat.up ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
              )}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-3xl font-black text-white mb-1 tracking-tight group-hover:scale-105 transition-transform origin-left">{stat.value}</h3>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#0f172a] p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-8">Revenue Growth</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={facilityStats}>
                <defs>
                  <linearGradient id="colorRevEnterprise" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorRevEnterprise)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0f172a] p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-8">Revenue Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4 mt-6">
            {distributionData.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-sm text-slate-400 font-medium">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAnalytics;
