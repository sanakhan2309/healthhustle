import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { useState } from 'react';
import { blogPosts } from '../data/enterpriseMock';

const BlogCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group bg-slate-900/30 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/30 transition-all"
  >
    <div className="aspect-video overflow-hidden relative">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center space-x-4 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
        <div className="flex items-center space-x-1">
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <User className="w-3 h-3" />
          <span>{post.author}</span>
        </div>
      </div>
      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-500 transition-colors leading-tight">
        {post.title}
      </h3>
      <p className="text-slate-400 text-sm font-medium mb-8 line-clamp-2 leading-relaxed">
        {post.excerpt}
      </p>
      <button className="flex items-center space-x-2 text-emerald-500 font-black text-xs uppercase tracking-[0.2em] group/btn">
        <span>Read More</span>
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categorize posts to ensure we have enough in each
  const categories = ['All', 'Industry', 'Wellness', 'Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#020203] min-h-screen">
      <div className="max-w-7xl mx-auto pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-6">
            <Tag className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">Our Insights</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Latest from <span className="text-emerald-500">HealthHustle</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Healthcare industry ke trends, staffing solutions aur career tips ke liye hamara blog parhein.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl pl-14 pr-6 py-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all font-medium"
            />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                  selectedCategory === cat 
                  ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                  : 'bg-slate-900/50 border-slate-800 text-slate-500 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/20 border border-slate-800 rounded-[3rem]">
            <p className="text-slate-500 font-bold">Koi articles nahi mile.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
