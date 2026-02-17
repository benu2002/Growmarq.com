import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Trash2, Plus, Sparkles, LogOut, Edit3 } from 'lucide-react';
import { generateBlogContent } from '../services/geminiService';

const Admin: React.FC = () => {
  const { adminUser, login, logout, blogPosts, addBlogPost, deleteBlogPost } = useAppContext();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // New Post State
  const [isCreating, setIsCreating] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    category: 'General',
    content: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') { // Simple mock auth
      login();
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleGenerateAI = async () => {
    if (!newPost.title) {
      alert("Please enter a title first so the AI knows what to write about.");
      return;
    }
    setIsGenerating(true);
    const content = await generateBlogContent(newPost.title);
    setNewPost(prev => ({ ...prev, content: content }));
    setIsGenerating(false);
  };

  const handleSavePost = () => {
    if (!newPost.title || !newPost.content) return;
    
    addBlogPost({
      id: Date.now().toString(),
      title: newPost.title,
      excerpt: newPost.content.substring(0, 100) + '...',
      content: newPost.content,
      author: 'Admin',
      date: new Date().toISOString().split('T')[0],
      category: newPost.category,
      imageUrl: `https://picsum.photos/800/400?random=${Date.now()}`
    });
    
    setNewPost({ title: '', category: 'General', content: '' });
    setIsCreating(false);
  };

  if (!adminUser.isAuthenticated) {
    return (
      <div className="pt-32 min-h-screen bg-brand-900 flex flex-col items-center">
        <div className="glass-panel p-8 rounded-2xl w-full max-w-md border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Access</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Password (Hint: admin)</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-brand-800 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-brand-400"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-brand-500 hover:bg-brand-400 text-white py-2 rounded font-semibold transition-colors">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-brand-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <button onClick={logout} className="flex items-center gap-2 text-gray-400 hover:text-white">
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Action Bar */}
        <div className="mb-8">
            <button 
                onClick={() => setIsCreating(true)}
                className="bg-brand-500 hover:bg-brand-400 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold transition-colors"
            >
                <Plus size={20} /> Create New Post
            </button>
        </div>

        {/* Create Modal / Form Area */}
        {isCreating && (
          <div className="glass-panel p-6 rounded-xl border border-white/10 mb-12 animate-fade-in">
             <h3 className="text-xl font-bold text-white mb-4">New Blog Post</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                 <div>
                     <label className="block text-gray-400 text-sm mb-1">Title</label>
                     <input 
                        type="text" 
                        value={newPost.title}
                        onChange={e => setNewPost({...newPost, title: e.target.value})}
                        className="w-full bg-brand-800 border border-white/10 rounded px-4 py-2 text-white"
                        placeholder="e.g. 5 SEO Tips for 2024"
                     />
                 </div>
                 <div>
                     <label className="block text-gray-400 text-sm mb-1">Category</label>
                     <select 
                        value={newPost.category}
                        onChange={e => setNewPost({...newPost, category: e.target.value})}
                        className="w-full bg-brand-800 border border-white/10 rounded px-4 py-2 text-white"
                     >
                         <option>General</option>
                         <option>SEO</option>
                         <option>Social Media</option>
                         <option>AI Marketing</option>
                         <option>Paid Ads</option>
                     </select>
                 </div>
             </div>
             
             <div className="mb-4">
                 <div className="flex justify-between items-center mb-1">
                    <label className="block text-gray-400 text-sm">Content</label>
                    <button 
                        onClick={handleGenerateAI}
                        disabled={isGenerating}
                        className="text-xs flex items-center gap-1 text-brand-300 hover:text-white disabled:opacity-50"
                    >
                        <Sparkles size={12} /> {isGenerating ? 'Generating...' : 'Auto-Generate with AI'}
                    </button>
                 </div>
                 <textarea 
                    value={newPost.content}
                    onChange={e => setNewPost({...newPost, content: e.target.value})}
                    rows={10}
                    className="w-full bg-brand-800 border border-white/10 rounded px-4 py-2 text-white font-mono text-sm"
                    placeholder="Write content here or use AI to generate..."
                 ></textarea>
             </div>

             <div className="flex gap-4">
                 <button onClick={handleSavePost} className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded font-medium">Publish</button>
                 <button onClick={() => setIsCreating(false)} className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded font-medium">Cancel</button>
             </div>
          </div>
        )}

        {/* Posts List */}
        <div className="glass-panel rounded-xl overflow-hidden border border-white/10">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-brand-800 text-gray-400 text-sm uppercase">
                        <th className="p-4">Title</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Date</th>
                        <th className="p-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {blogPosts.map(post => (
                        <tr key={post.id} className="hover:bg-white/5 transition-colors">
                            <td className="p-4 text-white font-medium">{post.title}</td>
                            <td className="p-4 text-gray-400">{post.category}</td>
                            <td className="p-4 text-gray-500 text-sm">{post.date}</td>
                            <td className="p-4 text-right">
                                <button 
                                    onClick={() => deleteBlogPost(post.id)}
                                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                                    title="Delete"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                    {blogPosts.length === 0 && (
                        <tr>
                            <td colSpan={4} className="p-8 text-center text-gray-500">No blog posts found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
