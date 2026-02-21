-- 1. Create the blog_posts table
create table if not exists blog_posts (
  id text primary key,
  title text not null,
  excerpt text,
  content text,
  author text,
  date date,
  category text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Enable Row Level Security (RLS)
alter table blog_posts enable row level security;

-- 3. Create Policies
-- Allow public read access (so visitors can see blogs)
create policy "Public Posts are viewable by everyone"
  on blog_posts for select
  using ( true );

-- Allow public write access (Required because we are using mock auth in the frontend)
-- NOTE: In a production app with real Supabase Auth, you would restrict this to authenticated users.
create policy "Enable insert for everyone" on blog_posts for insert with check (true);
create policy "Enable update for everyone" on blog_posts for update using (true);
create policy "Enable delete for everyone" on blog_posts for delete using (true);

-- 4. Insert Initial Data
insert into blog_posts (id, title, excerpt, content, author, date, category, image_url)
values
  ('1', 'Why Every Business in Odisha Needs a Website', 'In today''s digital age, having a physical shop isn''t enough. Here is why a website is your most powerful asset.', '## The Digital Shift\n\nMore customers in Odisha are searching online before visiting a store. A professional website acts as your 24/7 salesperson...\n\n### Credibility\nA website makes your business look professional and trustworthy compared to competitors who only use social media.', 'Growmarq Team', '2023-10-15', 'Business Growth', 'https://picsum.photos/800/400?random=1'),
  ('2', 'Landing Pages vs. Websites: What Do You Need?', 'Understanding the difference can save you money and increase your sales.', '## The Goal Matters\n\nIf you want to sell a specific product or course, a landing page is best. If you want to build a brand, you need a full website...\n\n### Conversion Focus\nLanding pages have one goal: conversion. Websites have multiple goals: information, trust, and contact.', 'Growmarq Team', '2023-11-02', 'Web Development', 'https://picsum.photos/800/400?random=2'),
  ('3', 'E-Commerce Growth in India', 'How local businesses are scaling by selling products online with secure payment gateways.', '## Selling Beyond Boundaries\n\nAn e-commerce website allows you to sell to customers across India, not just in your local city...\n\n### Secure Payments\nIntegrating UPI and secure gateways builds trust and makes purchasing easy for customers.', 'Growmarq Team', '2023-11-20', 'E-Commerce', 'https://picsum.photos/800/400?random=3')
on conflict (id) do nothing;
