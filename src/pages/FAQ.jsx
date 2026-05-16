import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { faqData } from '../data/enterpriseMock';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-800 last:border-0">
    <button
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left group"
    >
      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-emerald-500' : 'text-white group-hover:text-emerald-400'}`}>
        {question}
      </span>
      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-slate-400 leading-relaxed font-medium">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#020203] min-h-screen">
      <div className="max-w-4xl mx-auto pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">Support Center</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Frequently Asked <span className="text-emerald-500">Questions</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Learn more about how HealthHustle is revolutionizing healthcare staffing for facilities and professionals.
          </p>
        </motion.div>

        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-800 rounded-3xl pl-16 pr-8 py-6 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all text-lg font-medium"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-slate-900/30 border border-slate-800 rounded-[3rem] p-8 md:p-12"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500 font-bold">No questions found matching your search.</p>
            </div>
          )}
        </motion.div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[3rem] p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-700" />
            <h2 className="text-3xl font-black text-white mb-4 relative z-10">Still have questions?</h2>
            <p className="text-emerald-50 relative z-10 mb-8 font-medium">Our team is ready to help you with any inquiries you may have.</p>
            <button className="bg-white text-emerald-600 px-10 py-4 rounded-2xl font-black hover:bg-emerald-50 transition-all relative z-10 flex items-center space-x-2 mx-auto">
              <MessageCircle className="w-5 h-5" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
