import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Activity, 
  Heart, 
  Droplets, 
  Scale, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { cn } from '../utils/cn';

const Dashboard = () => {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Arsalan Khan",
      specialty: "Cardiology",
      date: "May 20, 2026",
      time: "10:30 AM",
      status: "Upcoming"
    },
    {
      id: 2,
      doctor: "Dr. Sarah Ahmed",
      specialty: "Pediatrics",
      date: "May 15, 2026",
      time: "02:00 PM",
      status: "Completed"
    }
  ];

  const vitals = [
    { label: "Heart Rate", value: "72 bpm", icon: Heart, color: "text-rose-500", bg: "bg-rose-500/10" },
    { label: "Blood Pressure", value: "120/80", icon: Droplets, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Weight", value: "74 kg", icon: Scale, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Blood Sugar", value: "95 mg/dL", icon: Activity, color: "text-orange-500", bg: "bg-orange-500/10" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Patient <span className="text-emerald-500">Dashboard</span></h1>
          <p className="text-slate-400 mt-2">Welcome back, Ali Khan. Here is your health overview.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Patient ID</p>
              <p className="text-white font-bold text-sm">#HH-2026-9821</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vitals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {vitals.map((vital, index) => (
          <motion.div
            key={vital.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem] hover:border-slate-700 transition-all"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", vital.bg)}>
              <vital.icon className={cn("w-6 h-6", vital.color)} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{vital.value}</h3>
            <p className="text-slate-500 font-medium">{vital.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Appointments */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Appointments</h2>
            <button className="text-emerald-500 font-bold text-sm hover:text-emerald-400">View All</button>
          </div>
          <div className="space-y-4">
            {appointments.map((app) => (
              <div key={app.id} className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem] flex items-center justify-between group hover:border-emerald-500/30 transition-all">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                    <Calendar className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{app.doctor}</h3>
                    <p className="text-slate-500 text-sm font-medium">{app.specialty}</p>
                  </div>
                </div>
                <div className="hidden md:flex flex-col items-end">
                  <div className="flex items-center space-x-2 text-white font-bold">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>{app.time}</span>
                  </div>
                  <p className="text-slate-500 text-xs font-medium mt-1">{app.date}</p>
                </div>
                <div className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest",
                  app.status === 'Upcoming' ? "bg-blue-500/10 text-blue-500" : "bg-emerald-500/10 text-emerald-500"
                )}>
                  {app.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Prescriptions */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Prescriptions</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 group cursor-pointer hover:bg-slate-800 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-emerald-500" />
                    <span className="text-white font-bold">Medical Report #{1024 + i}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-slate-500 font-medium">Updated on May 12, 2026</p>
              </div>
            ))}
            <button className="w-full py-4 rounded-2xl border-2 border-dashed border-slate-800 text-slate-500 font-bold hover:border-slate-700 hover:text-slate-400 transition-all">
              Upload Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
