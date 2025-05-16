import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

 const DocumentationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
    <div className="text-center mb-16">
    <h1 className="text-4xl font-bold mb-4">Documentation</h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to know about using LinkShort effectively.
    </p>
    </div> 
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
        <CardHeader>
        <CardTitle>Getting Started</CardTitle>
        <CardDescription>Learn the basics of LinkShort</CardDescription>
        </CardHeader>
        <CardContent>
        <p className="text-gray-600">
        Get up and running with LinkShort in minutes. Learn how to create your first shortened URL and manage your dashboard.
        </p>
        </CardContent>
        </Card>
        <Card>
        <CardHeader>
        <CardTitle>API Reference</CardTitle>
        <CardDescription>Integrate with our API</CardDescription>
        </CardHeader>
        <CardContent>
        <p className="text-gray-600">Complete documentation for our RESTful API, including authentication, endpoints, and examples.</p>
        </CardContent>
        </Card>
        <Card>
        <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>Track link performance</CardDescription>
        </CardHeader>
        <CardContent>
        <p className="text-gray-600">Learn how to interpret the analytics data and gain insights from your shortened URLs.</p>
        </CardContent>
        </Card>
      </div>
    </div>
  );
 };

 export default DocumentationPage;
