import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PortalProvider } from './context/PortalContext';
import DashboardLayout from './components/layout/DashboardLayout';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import FacilityDashboard from './pages/facility/FacilityDashboard';
import StaffManagement from './pages/facility/StaffManagement';
import FinancialAnalytics from './pages/facility/FinancialAnalytics';
import ProfessionalDashboard from './pages/professional/ProfessionalDashboard';
import PatientLogs from './pages/professional/PatientLogs';
import PersonalSettings from './pages/professional/PersonalSettings';
import Messaging from './pages/Messaging';
import Apply from './pages/Apply';
import About from './pages/About';
import Contact from './pages/Contact';
import Shifts from './pages/Shifts';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import HowItWorks from './pages/HowItWorks';
import Services from './pages/Services';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Home /></>} />
      <Route path="/apply" element={<><Navbar /><Apply /></>} />
      <Route path="/about" element={<><Navbar /><About /></>} />
      <Route path="/contact" element={<><Navbar /><Contact /></>} />
      <Route path="/faq" element={<><Navbar /><FAQ /></>} />
      <Route path="/blog" element={<><Navbar /><Blog /></>} />
      <Route path="/how-it-works" element={<><Navbar /><HowItWorks /></>} />
      <Route path="/services" element={<><Navbar /><Services /></>} />

      {/* Dashboard Routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/facility" element={<FacilityDashboard />} />
        <Route path="/facility/staff" element={<StaffManagement />} />
        <Route path="/facility/finances" element={<FinancialAnalytics />} />
        <Route path="/professional" element={<ProfessionalDashboard />} />
        <Route path="/professional/patients" element={<PatientLogs />} />
        <Route path="/professional/settings" element={<PersonalSettings />} />
        <Route path="/shifts" element={<Shifts />} />
        <Route path="/messages" element={<Messaging />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <PortalProvider>
      <Router>
        <div className="min-h-screen bg-[#09090b] text-slate-100 selection:bg-emerald-500/30 font-sans">
          <AppRoutes />
          <Toaster 
            position="bottom-right" 
            toastOptions={{
              style: {
                background: '#0f172a',
                color: '#fff',
                border: '1px solid #1e293b',
                borderRadius: '16px',
                padding: '16px',
              },
            }} 
          />
        </div>
      </Router>
    </PortalProvider>
  );
}

export default App;
