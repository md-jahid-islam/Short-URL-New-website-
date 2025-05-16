import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UrlShortener } from '@/components/url/UrlShortener';
import { UrlList } from '@/components/url/UrlList';
import { Link } from 'react-router-dom';
import { History } from 'lucide-react';
import { toast } from 'sonner';

 const UrlsPage = () => {
  const handleExport = () => {
 // =========== For now, we'll use mock data from UrlList ============= // 
 const mockData = [
      {
        originalUrl: 'https://www.example.com/very/long/url/that/needs/shortening',
        shortUrl: 'https://lksh.rt/abc123',
        createdAt: '2023-05-15T10:30:00Z',
        clicks: 145,
      },
      {
        originalUrl: 'https://www.verylongdomainname.com/blog/article/how-to-create-short-urls',
        shortUrl: 'https://lksh.rt/def456',
        createdAt: '2023-05-14T15:45:00Z',
        clicks: 89,
      },
      {
        originalUrl: 'https://www.anotherexample.org/products/category/item/details',
        shortUrl: 'https://lksh.rt/ghi789',
        createdAt: '2023-05-13T09:15:00Z',
        clicks: 62,
      },
    ];

    // ========== Create CSV content ============= //
    const csvContent = [
      ['Original URL', 'Short URL', 'Created At', 'Clicks'],
      ...mockData.map(item => [
        item.originalUrl,
        item.shortUrl,
        new Date(item.createdAt).toLocaleString(),
        item.clicks.toString()
      ])
    ].map(row => row.join(',')).join('\n');

    // ========== Create and download the CSV file ============== //
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'url_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // ========= Notify user =========== //
    toast.success('URLs exported successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Your URLs</h1>
        <div className="flex gap-2">
        <Link to="/dashboard/history">
        <Button variant="outline" className="flex items-center gap-2 bg-guardian-primary text-white hover:bg-guardian-secondary"><History className="h-4 w-4" />Visit History</Button>
        </Link>
        <Button onClick={handleExport} className="bg-guardian-primary hover:bg-guardian-secondary text-white">Export URLs</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
        <CardTitle className="text-center">Create New URL</CardTitle>
        <CardDescription className="text-center">Shorten a new URL or customize an existing one
        </CardDescription>
        </CardHeader>
        <CardContent>
        <UrlShortener />
        </CardContent>
      </Card>
      <Card>
      <CardHeader>
      <CardTitle>All URLs</CardTitle>
      <CardDescription>Manage and track all your shortened URLs       
      </CardDescription>
      </CardHeader>
      <CardContent>
      <UrlList />
      </CardContent>
      </Card>
    </div>
  );
 };

 export default UrlsPage;
