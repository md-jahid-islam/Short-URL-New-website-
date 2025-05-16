import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

 const ApiPage: React.FC = () => {
  return (
  <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to integrate LinkShort into your applications.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <h3 className="text-lg font-bold mb-4">Contents</h3>
            <ul className="space-y-2">
              <li>
              <a href="#introduction" className="text-brand-600 hover:underline">Introduction</a>
              </li>
              <li>
              <a href="#authentication" className="text-brand-600 hover:underline">Authentication</a>
              </li>
              <li>
              <a href="#endpoints" className="text-brand-600 hover:underline">Endpoints</a>
              </li>
              <li>
              <a href="#rate-limiting" className="text-brand-600 hover:underline">Rate Limiting</a>
              </li>
              <li>
              <a href="#sdks" className="text-brand-600 hover:underline">SDKs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">The LinkShort API provides a simple and efficient way to programmatically create and manage shortened URLs. This documentation outlines the available endpoints, authentication methods, and best practices for integrating with our API.</p>
            <p className="text-gray-600">Our API is RESTful, uses JSON for data serialization, and returns standard HTTP response codes to indicate success or failure.</p>
          </section>

          <section id="authentication" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Authentication</h2>
            <p className="text-gray-600 mb-4">All API requests require authentication using an API key. You can obtain your API key from your account dashboard.</p>
            
            <Card className="mb-6">
              <CardHeader>
              <CardTitle>API Key Authentication</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-600 mb-4">Include your API key in the request headers:</p>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>Authorization: Bearer YOUR_API_KEY</code>
              </pre>
              </CardContent>
            </Card>
          </section>
          <section id="endpoints" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Endpoints</h2>           
            <Tabs defaultValue="create">
            <TabsList className="mb-4">
            <TabsTrigger value="create">Create URL</TabsTrigger>
            <TabsTrigger value="retrieve">Retrieve URL</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
              
              <TabsContent value="create">
              <Card>
              <CardHeader>
              <CardTitle>Create Shortened URL</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-600 mb-4">
              <strong>POST</strong> /api/v1/urls</p>
              <p className="text-gray-600 mb-4">Request body:</p>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <code>{`{"long_url": "https://example.com/very-long-url-that-needs-shortening",
              "custom_alias": "my-link",  // optional
              "expires_at": "2023-12-31"  // optional}`}</code>
              </pre>
              <p className="text-gray-600 mb-4">Response:</p>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`{"id": "abc123","short_url": "https://lnk.sh/my-link",
              "long_url": "https://example.com/very-long-url-that-needs-shortening",
              "created_at": "2023-05-01T12:00:00Z",
              "expires_at": "2023-12-31T23:59:59Z"}`}</code>
              </pre>
              </CardContent>
              </Card>

              </TabsContent>              
              <TabsContent value="retrieve">
              <Card>
              <CardHeader>
              <CardTitle>Retrieve URL Details</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-600 mb-4">
              <strong>GET</strong> /api/v1/urls/{"{url_id}"}
              </p>
              <p className="text-gray-600 mb-4">Response:</p>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`{
              "id": "abc123","short_url": "https://lnk.sh/my-link",
              "long_url": "https://example.com/very-long-url-that-needs-shortening",
              "created_at": "2023-05-01T12:00:00Z",
              "expires_at": "2023-12-31T23:59:59Z",
              "total_clicks": 42}`}</code>
              </pre>
              </CardContent>
              </Card>

              </TabsContent>              
              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                  <CardTitle>Get URL Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                  <p className="text-gray-600 mb-4">
                  <strong>GET</strong> /api/v1/urls/{"{url_id}"}/analytics
                  </p>
                  <p className="text-gray-600 mb-4">Response:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{`{
                  "url_id": "abc123",
                  "total_clicks": 42,
                  "unique_visitors": 38,
                  "referrers": {
                  "facebook.com": 15,
                  "twitter.com": 10,
                  "direct": 17
                 },
                 "countries": {
                 "Bangladesh": 17,
                 "India": 12,
                 "CA": 7,
                 "UK": 12,
                 "CA": 5,
                 "other": 5
                 },
                 "devices": {
                 "mobile": 25,
                 "desktop": 12,
                 "tablet": 5}`}</code>
                 </pre>
                </CardContent>
              </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section id="rate-limiting" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Rate Limiting</h2>
            <p className="text-gray-600 mb-4">The API is rate limited to prevent abuse. Limits vary by plan:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
            <li>Free: 60 requests per minute</li>
            <li>Pro: 120 requests per minute</li>
            <li>Enterprise: Custom limits available</li>
            </ul>
            <p className="text-gray-600">Rate limit information is included in the response headers.</p>
          </section>

          <section id="sdks" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">SDKs & Libraries</h2>
            <p className="text-gray-600 mb-6">We provide official client libraries for popular programming languages:</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" /></svg>JavaScript</Button>
              <Button variant="outline" className="justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" /></svg>Python
              </Button>
              <Button variant="outline" className="justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" /></svg>PHP
              </Button>
              <Button variant="outline" className="justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" /></svg>Java
              </Button>
              <Button variant="outline" className="justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" /></svg>Ruby
              </Button>
              <Button variant="outline" className="justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" /></svg>Go
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
 };

 export default ApiPage;
