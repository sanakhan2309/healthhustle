import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Lock, 
  Smartphone,
  CheckCircle2,
  Camera
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { cn } from '../../utils/cn';

const PersonalSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleSave = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: 'Saving changes...',
        success: 'Settings Updated!',
        error: 'Failed to save settings',
      }
    );
  };

  const tabs = [
    { id: 'profile', label: 'Public Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black text-white tracking-tighter">Account <span className="text-emerald-500">Settings</span></h1>
        <p className="text-slate-500 font-medium">Manage your personal information, security preferences, and alerts.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Nav */}
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-6 py-4 rounded-2xl font-bold transition-all",
                activeTab === tab.id 
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                  : "text-slate-500 hover:bg-slate-900 hover:text-white"
              )}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full" />
          
          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-slate-800">
                <div className="relative group">
                  <div className="w-32 h-32 bg-slate-800 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-700 group-hover:border-emerald-500 transition-all overflow-hidden">
                    <User className="w-12 h-12 text-slate-500 group-hover:text-emerald-500" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg border-4 border-[#0f172a]">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-1">Dr. Sarah Chen</h3>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Senior Surgeon • PROF-9921</p>
                  <button className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em] hover:underline">Change Profile Photo</button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" defaultValue="Sarah Chen" className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" defaultValue="sarah.chen@healthhustle.com" className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Biography</label>
                  <textarea rows="4" className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" defaultValue="Specializing in minimally invasive cardiac procedures with over 12 years of clinical experience." />
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 flex justify-end">
                <button 
                  onClick={handleSave}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-600/20"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-3xl flex items-start space-x-4">
                <Shield className="w-6 h-6 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="text-emerald-500 font-bold">Two-Factor Authentication is Enabled</h4>
                  <p className="text-emerald-500/70 text-sm mt-1">Your account is secured with a secondary verification layer.</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-emerald-500 ml-auto" />
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-[#020203] border border-slate-800 rounded-3xl group hover:border-slate-700 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800">
                      <Lock className="w-6 h-6 text-slate-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Change Password</h4>
                      <p className="text-slate-500 text-xs mt-1">Last changed 3 months ago</p>
                    </div>
                  </div>
                  <button className="text-emerald-500 font-black text-xs uppercase tracking-widest hover:underline">Update</button>
                </div>

                <div className="flex items-center justify-between p-6 bg-[#020203] border border-slate-800 rounded-3xl group hover:border-slate-700 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800">
                      <Smartphone className="w-6 h-6 text-slate-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Session Management</h4>
                      <p className="text-slate-500 text-xs mt-1">Manage active logins across devices</p>
                    </div>
                  </div>
                  <button className="text-emerald-500 font-black text-xs uppercase tracking-widest hover:underline">View All</button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalSettings;
