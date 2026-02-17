import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BlogPost, AdminUser } from '../types';
import { INITIAL_BLOG_POSTS } from '../constants';

interface AppContextType {
  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  updateBlogPost: (post: BlogPost) => void;
  adminUser: AdminUser;
  login: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load initial posts from local storage or fall back to constants
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('growMarq_posts');
    return saved ? JSON.parse(saved) : INITIAL_BLOG_POSTS;
  });

  const [adminUser, setAdminUser] = useState<AdminUser>(() => {
    const saved = localStorage.getItem('growMarq_admin');
    return saved ? JSON.parse(saved) : { isAuthenticated: false };
  });

  useEffect(() => {
    localStorage.setItem('growMarq_posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('growMarq_admin', JSON.stringify(adminUser));
  }, [adminUser]);

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => [post, ...prev]);
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  const updateBlogPost = (updatedPost: BlogPost) => {
    setBlogPosts(prev => prev.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const login = () => setAdminUser({ isAuthenticated: true });
  const logout = () => setAdminUser({ isAuthenticated: false });

  return (
    <AppContext.Provider value={{ blogPosts, addBlogPost, deleteBlogPost, updateBlogPost, adminUser, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
