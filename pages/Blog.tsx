import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const { blogPosts } = useAppContext();

  return (
    <div className="pt-24 min-h-screen bg-brand-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">Latest Insights</h1>
          <p className="text-xl text-gray-400">
            Trends, strategies, and industry news from the Grow Marq team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-brand-400/30 transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl || 'https://picsum.photos/800/400'} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-brand-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                    {/* In a real app, this would link to a /blog/:id page. For demo, we just stay here or scroll top */}
                   <span className="text-brand-400 text-sm font-semibold flex items-center gap-2">Read Article <ArrowRight size={16} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
