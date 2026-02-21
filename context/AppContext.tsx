import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BlogPost, AdminUser } from '../types';
import { INITIAL_BLOG_POSTS } from '../constants';
import { supabase } from '../services/supabaseClient';

interface AppContextType {
  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  updateBlogPost: (post: BlogPost) => void;
  adminUser: AdminUser;
  login: () => void;
  logout: () => void;
  isLoading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [adminUser, setAdminUser] = useState<AdminUser>(() => {
    const saved = localStorage.getItem('growMarq_admin');
    return saved ? JSON.parse(saved) : { isAuthenticated: false };
  });

  // Fetch posts from Supabase on mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, excerpt, content, author, date, category, imageUrl:image_url')
          .order('date', { ascending: false });

        if (error) {
          console.error('Error fetching posts:', error);
          // Fallback to constants if DB is empty or fails initially
          setBlogPosts(INITIAL_BLOG_POSTS);
        } else if (data && data.length > 0) {
          setBlogPosts(data);
        } else {
          setBlogPosts(INITIAL_BLOG_POSTS);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setBlogPosts(INITIAL_BLOG_POSTS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    localStorage.setItem('growMarq_admin', JSON.stringify(adminUser));
  }, [adminUser]);

  const addBlogPost = async (post: BlogPost) => {
    // Optimistic update
    setBlogPosts(prev => [post, ...prev]);

    const { error } = await supabase
      .from('blog_posts')
      .insert([
        {
          id: post.id, // Or let Supabase generate it, but we handle ID generation in Admin currently
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          author: post.author,
          date: post.date,
          category: post.category,
          image_url: post.imageUrl
        }
      ]);

    if (error) {
      console.error('Error adding post to Supabase:', error);
      // Revert on failure could be implemented here
    }
  };

  const deleteBlogPost = async (id: string) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
    }
  };

  const updateBlogPost = async (updatedPost: BlogPost) => {
    setBlogPosts(prev => prev.map(post => post.id === updatedPost.id ? updatedPost : post));

    const { error } = await supabase
      .from('blog_posts')
      .update({
          title: updatedPost.title,
          excerpt: updatedPost.excerpt,
          content: updatedPost.content,
          author: updatedPost.author,
          date: updatedPost.date,
          category: updatedPost.category,
          image_url: updatedPost.imageUrl
      })
      .eq('id', updatedPost.id);

    if (error) {
       console.error('Error updating post:', error);
    }
  };

  const login = () => setAdminUser({ isAuthenticated: true });
  const logout = () => setAdminUser({ isAuthenticated: false });

  return (
    <AppContext.Provider value={{ blogPosts, addBlogPost, deleteBlogPost, updateBlogPost, adminUser, login, logout, isLoading }}>
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
