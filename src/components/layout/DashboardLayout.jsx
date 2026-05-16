import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  DollarSign, 
  Settings, 
  Bell, 
  LogOut,
  Activity,
  ArrowLeftRight,
  Search,
  User,
  ChevronDown,
  Briefcase,
  Home
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { usePortal } from '../../context/PortalContext';
import { cn } from '../../utils/cn';
import { useState, useEffect } from 'react';

const NavItem = ({ icon: Icon, label, path, active }) => (
  <Link to={path}>
    <div className={cn(
      "flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 group relative",
      active 
        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
        : "text-slate-500 hover:bg-slate-800/50 hover:text-white"
    )}>
      <Icon className={cn("w-6 h-6 mb-1", active ? "text-white" : "group-hover:scale-110 transition-transform")} />
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      {active && (
        <motion.div 
          layoutId="active-nav-dot" 
          className="absolute -bottom-1 w-1 h-1 rounded-full bg-white" 
        />
      )}
    </div>
  </Link>
);

const DashboardLayout = ({ children }) => {
  const { activePortal, togglePortal, user } = usePortal();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  // Auto-redirect when switching portals if current route doesn't match
  useEffect(() => {
    if (activePortal === 'facility' && location.pathname.startsWith('/professional')) {
      navigate('/facility');
    } else if (activePortal === 'professional' && location.pathname.startsWith('/facility')) {
      navigate('/professional');
    }
  }, [activePortal, location.pathname, navigate]);

  const navItems = activePortal === 'facility' 
    ? [
        { icon: LayoutDashboard, label: 'Overview', path: '/facility' },
        { icon: Briefcase, label: 'Shifts', path: '/shifts' },
        { icon: Users, label: 'Staff', path: '/facility/staff' },
        { icon: DollarSign, label: 'Finance', path: '/facility/finances' },
        { icon: MessageSquare, label: 'Chat', path: '/messages' },
      ]
    : [
        { icon: LayoutDashboard, label: 'Practice', path: '/professional' },
        { icon: Briefcase, label: 'Shifts', path: '/shifts' },
        { icon: Activity, label: 'Patients', path: '/professional/patients' },
        { icon: MessageSquare, label: 'Messages', path: '/messages' },
        { icon: Settings, label: 'Settings', path: '/professional/settings' },
      ];

  return (
    <div className="flex h-screen bg-[#020203] text-slate-100 overflow-hidden font-sans selection:bg-emerald-500/30">
      {/* Sleek Left Command Bar */}
      <aside className="w-24 bg-[#09090b] border-r border-slate-800/50 flex flex-col items-center py-8 z-50">
        <Link to="/" className="mb-10 group">
          <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all shadow-lg group-hover:shadow-emerald-500/20">
            <Home className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          </div>
          <span className="text-[8px] font-black text-slate-600 group-hover:text-emerald-500 uppercase tracking-widest mt-1 block text-center">Home</span>
        </Link>

        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-12">
          <Activity className="w-6 h-6 text-white" />
        </div>

        <nav className="flex-1 space-y-4 px-2">
          {navItems.map((item) => (
            <NavItem 
              key={item.path} 
              {...item} 
              active={location.pathname === item.path}
            />
          ))}
        </nav>

        <div className="mt-auto space-y-6 flex flex-col items-center pb-4">
          <button 
            onClick={togglePortal}
            className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center hover:bg-indigo-500/20 transition-all group"
            title="Switch Portal"
          >
            <ArrowLeftRight className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
          
          <button className="w-12 h-12 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-400 flex items-center justify-center hover:bg-slate-800 transition-all">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Modern Top Header */}
        <header className="h-24 bg-[#020203]/80 backdrop-blur-2xl border-b border-slate-800/30 flex items-center justify-between px-10 relative z-40">
          <div className="flex items-center space-x-8">
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white">
                {activePortal === 'facility' ? 'FACILITY' : 'PROFESSIONAL'}{' '}
                <span className="text-emerald-500">PORTAL</span>
              </h1>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Command Center v2.0</p>
            </div>

            <div className={cn(
              "flex items-center bg-slate-900/50 border border-slate-800 rounded-2xl px-4 py-2.5 transition-all duration-300",
              searchOpen ? "w-96 border-emerald-500/30 shadow-lg shadow-emerald-500/5" : "w-64"
            )}>
              <Search className="w-4 h-4 text-slate-500 mr-3" />
              <input 
                type="text" 
                placeholder="Quick Search (Ctrl + K)" 
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setSearchOpen(false)}
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-600 font-medium"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-slate-900/50 border border-slate-800 p-1.5 rounded-2xl">
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#020203]" />
              </button>
              <div className="w-[1px] h-4 bg-slate-800" />
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
                <Settings className="w-5 h-5" />
              </button>
            </div>

            <button className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/10 p-2 pr-4 rounded-2xl transition-all">
              <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="text-left hidden lg:block">
                <p className="text-xs font-black text-white">{user.name}</p>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{user.role}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-500 ml-2" />
            </button>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#020203] to-[#09090b]">
          <div className="p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-7xl mx-auto"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] -z-10 rounded-full" />
      </main>
    </div>
  );
};

export default DashboardLayout;
