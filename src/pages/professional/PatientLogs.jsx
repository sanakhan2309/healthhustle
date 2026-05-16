import { motion } from 'framer-motion';
import { 
  Activity, 
  Search, 
  Calendar, 
  ChevronRight, 
  Clock, 
  FileText,
  AlertCircle,
  Plus
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const initialPatients = [
  { id: 'P-101', name: 'Ali Khan', age: 45, lastVisit: '2026-05-12', condition: 'Stable', priority: 'Low' },
  { id: 'P-102', name: 'Zahra Ahmed', age: 28, lastVisit: '2026-05-14', condition: 'Critical', priority: 'High' },
  { id: 'P-103', name: 'Usman Sheikh', age: 34, lastVisit: '2026-05-15', condition: 'Recovering', priority: 'Medium' },
  { id: 'P-104', name: 'Fatima Malik', age: 52, lastVisit: '2026-05-16', condition: 'Stable', priority: 'Low' },
];

const PatientLogs = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', age: '', condition: 'Stable', priority: 'Low' });

  const handleAddPatient = (e) => {
    e.preventDefault();
    const id = `P-${Math.floor(Math.random() * 900) + 100}`;
    const lastVisit = new Date().toISOString().split('T')[0];
    setPatients([...patients, { id, lastVisit, ...newPatient }]);
    setIsModalOpen(false);
    setNewPatient({ name: '', age: '', condition: 'Stable', priority: 'Low' });
    toast.success('Patient record added!');
  };

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter">Patient <span className="text-indigo-500">Logs</span></h1>
          <p className="text-slate-500 font-medium">Detailed medical history and ongoing treatment monitoring.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all shadow-xl shadow-indigo-600/20 group"
        >
          <Plus className="w-5 h-5" />
          <span>Add Patient Record</span>
        </button>
      </div>

      {/* Add Patient Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] w-full max-w-lg shadow-2xl"
          >
            <h2 className="text-3xl font-black text-white mb-8">New Record</h2>
            <form onSubmit={handleAddPatient} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                <input required type="text" value={newPatient.name} onChange={e => setNewPatient({...newPatient, name: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500/20 focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Age</label>
                  <input required type="number" value={newPatient.age} onChange={e => setNewPatient({...newPatient, age: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500/20 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Condition</label>
                  <select value={newPatient.condition} onChange={e => setNewPatient({...newPatient, condition: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500/20 focus:outline-none appearance-none">
                    <option>Stable</option>
                    <option>Recovering</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-slate-800 text-white py-4 rounded-2xl font-bold">Cancel</button>
                <button type="submit" className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold">Save Record</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      <div className="bg-[#0f172a] border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by ID or Name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#020203] border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm text-white focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Patient Info</th>
                <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Condition</th>
                <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Last Visit</th>
                <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Priority</th>
                <th className="px-8 py-6 text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredPatients.map((patient) => (
                <motion.tr 
                  key={patient.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="group hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20">
                        <Activity className="w-5 h-5 text-indigo-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{patient.name}</p>
                        <p className="text-[10px] text-slate-500 font-bold">{patient.id} • {patient.age}y</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${
                      patient.condition === 'Critical' ? 'bg-rose-500/10 text-rose-500' : 
                      patient.condition === 'Recovering' ? 'bg-blue-500/10 text-blue-500' : 
                      'bg-emerald-500/10 text-emerald-500'
                    }`}>
                      {patient.condition}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-medium">{patient.lastVisit}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className={`w-4 h-4 ${
                        patient.priority === 'High' ? 'text-rose-500' : 
                        patient.priority === 'Medium' ? 'text-orange-500' : 
                        'text-emerald-500'
                      }`} />
                      <span className="text-xs font-bold text-slate-400">{patient.priority}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center space-x-3">
                      <button className="p-2 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700/50 transition-all text-slate-400 hover:text-white" title="View Records">
                        <FileText className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700/50 transition-all text-slate-400 hover:text-white" title="Schedule Appointment">
                        <Clock className="w-4 h-4" />
                      </button>
                      <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-indigo-500 transition-colors" />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientLogs;
