import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Computer, Shield, BookImage } from 'lucide-react';

 const BlogPage: React.FC = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  const blogPosts = [
    {
      id: 1,
      title: "Maximizing Click-Through Rates with Short URLs",
      excerpt: "Learn how shortened URLs can increase your click-through rates by up to 40% in your marketing campaigns.",
      author: "Jahidul Islam",
      date: "May 12, 2023",
      category: "Marketing",
      image: "photo-1581091226825-a6a2a5aee158",
      icon: <ArrowRight className="h-5 w-5" />
    },
    {
      id: 2,
      title: "The Psychology Behind Link Trust",
      excerpt: "Understand how users perceive shortened links and how to build trust with your audience.",
      author: "Rezwan Islam",
      date: "April 23, 2023",
      category: "User Experience",
      image: "photo-1486312338219-ce68d2c6f44d",
      icon: <ArrowRight className="h-5 w-5" />
    },
    {
      id: 3,
      title: "URL Shortening for Social Media Success",
      excerpt: "Discover how proper link management can boost your social media engagement and tracking.",
      author: "Tamim Al Hridoy",
      date: "March 17, 2023",
      category: "Social Media",
      image: "photo-1605810230434-7631ac76ec81",
      icon: <Twitter className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Enterprise Link Management Solutions",
      excerpt: "How large organizations can benefit from centralized link shortening and tracking.",
      author: "Jahidul Islam",
      date: "February 28, 2023",
      category: "Enterprise",
      image: "photo-1461749280684-dccba630e2f6",
      icon: <Computer className="h-5 w-5" />
    },
    {
      id: 5,
      title: "The Future of URL Shorteners",
      excerpt: "Exploring upcoming trends and technologies in the URL shortening industry.",
      author: "Rezwan Islam",
      date: "January 15, 2023",
      category: "Technology",
      image: "photo-1486312338219-ce68d2c6f44d",
      icon: <ArrowRight className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Security Best Practices for Short URLs",
      excerpt: "Ensuring your shortened links remain secure and protected from abuse.",
      author: "Tamim Al Hridoy",
      date: "December 10, 2022",
      category: "Security",
      image: "photo-1605810230434-7631ac76ec81",
      icon: <Shield className="h-5 w-5" />
    },
    {
      id: 7,
      title: "URL Analytics: Understanding Your Audience",
      excerpt: "How to use link analytics to gain insights into your audience's behavior and preferences.",
      author: "Jahidul Islam",
      date: "November 5, 2022",
      category: "Analytics",
      image: "photo-1461749280684-dccba630e2f6",
      icon: <ArrowRight className="h-5 w-5" />
    },
    {
      id: 8,
      title: "Mobile-First URL Strategies",
      excerpt: "Optimizing your shortened URLs for mobile users and improving mobile engagement.",
      author: "Rezwan Islam",
      date: "October 17, 2022",
      category: "Mobile",
      image: "photo-1581091226825-a6a2a5aee158",
      icon: <ArrowRight className="h-5 w-5" />
    }
  ];

  const loadMorePosts = () => {
  setVisiblePosts(prevCount => Math.min(prevCount + 3, blogPosts.length));
  };

  const hasMorePosts = visiblePosts < blogPosts.length;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">LinkShort Blog</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Insights, tips, and news about URL shortening and digital marketing.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.slice(0, visiblePosts).map(post => (
      <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">        
      <div className="h-48 bg-gray-200 overflow-hidden">
      <img src={`https://source.unsplash.com/${post.image}`} alt={post.title}className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"/>
      </div>
      <CardHeader>
      <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-brand-600 flex items-center gap-1">
      {post.icon}
      {post.category}
      </span>
      <span className="text-sm text-gray-500">{post.date}</span>
      </div>
      <h3 className="text-xl font-bold hover:text-brand-600 transition-colors">{post.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
      <p className="text-gray-600">{post.excerpt}</p>
      </CardContent>

      <CardFooter className="pt-0">
      <div className="flex items-center justify-between w-full">
      <span className="text-sm text-gray-500">By {post.author}</span>
      <Button variant="ghost" size="sm" className="text-brand-600 flex items-center gap-1 hover:bg-brand-50">
      Read More <ArrowRight className="h-4 w-4" />
      </Button>
      </div>
      </CardFooter>
      </Card>))}
      </div>

      {hasMorePosts && (
      <div className="mt-12 flex justify-center">
      <Button onClick={loadMorePosts} variant="outline" size="lg" className="flex items-center gap-2">
      Load More Articles <ArrowRight className="h-4 w-4" />
      </Button>
      </div>
      )}
    </div>
  );
 };

 export default BlogPage;
