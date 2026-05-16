import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/mockData';

const Doctors = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Meet Our <span className="text-emerald-500">World-Class</span> Specialists
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Connect with highly qualified professionals dedicated to your well-being.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:shadow-emerald-500/10"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-bold text-white">{doctor.rating}</span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-emerald-500 text-xs font-black uppercase tracking-widest mb-2">
                {doctor.specialty}
              </p>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {doctor.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-slate-400 text-sm space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{doctor.experience} experience</span>
                </div>
                <div className="flex items-center text-slate-400 text-sm space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className={doctor.availability === 'Available Today' ? 'text-emerald-400 font-bold' : ''}>
                    {doctor.availability}
                  </span>
                </div>
              </div>

              <Link
                to="/book"
                className="w-full bg-slate-800 group-hover:bg-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
