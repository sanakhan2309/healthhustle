import { createContext, useContext, useState } from 'react';

const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
  const [activePortal, setActivePortal] = useState('professional'); // 'facility' or 'professional'
  const [user, setUser] = useState({
    name: 'Dr. Sarah Chen',
    role: 'Senior Surgeon',
    facility: 'Central General Hospital',
    id: 'PROF-9921'
  });

  const [shifts, setShifts] = useState([
    { id: 1, facility: 'Memorial Hospital', department: 'Emergency Room', rate: 55, date: '2026-05-20', time: '07:00 PM', status: 'Open' },
    { id: 2, facility: 'City Medical Center', department: 'ICU', rate: 62, date: '2026-05-21', time: '09:00 AM', status: 'Open' },
    { id: 3, facility: 'St. Luke\'s Hospital', department: 'Pediatrics', rate: 48, date: '2026-05-22', time: '03:00 PM', status: 'Open' },
  ]);

  const togglePortal = () => {
    setActivePortal(prev => prev === 'facility' ? 'professional' : 'facility');
  };

  const claimShift = (id) => {
    setShifts(prev => prev.map(s => s.id === id ? { ...s, status: 'Claimed' } : s));
  };

  const postShift = (newShift) => {
    setShifts(prev => [...prev, { id: prev.length + 1, status: 'Open', ...newShift }]);
  };

  return (
    <PortalContext.Provider value={{ 
      activePortal, 
      togglePortal, 
      user, 
      setUser, 
      shifts, 
      claimShift, 
      postShift 
    }}>
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => {
  const context = useContext(PortalContext);
  if (!context) throw new Error('usePortal must be used within a PortalProvider');
  return context;
};
