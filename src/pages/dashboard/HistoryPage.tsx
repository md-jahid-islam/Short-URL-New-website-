import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

 interface VisitHistoryItem {
  id: string;
  shortUrl: string;
  originalUrl: string;
  visitedAt: string;
  referrer: string;
  device: string;
  browser: string;
 }
 // ======== Could be a user ID or name ========== //
 interface CreationHistoryItem {
  id: string;
  shortUrl: string;
  originalUrl: string;
  createdAt: string;
  createdBy: string; 
 }

 const HistoryPage: React.FC = () => {
  const [visitHistory, setVisitHistory] = useState<VisitHistoryItem[]>([]);
  const [creationHistory, setCreationHistory] = useState<CreationHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  loadHistory();
  }, []);

  // ============ Load visit history ============= //
  const loadHistory = () => {
    setIsLoading(true);
    try {
      const visitHistoryStr = localStorage.getItem('url_visit_history') || '[]';
      const parsedVisitHistory = JSON.parse(visitHistoryStr);
      setVisitHistory(parsedVisitHistory);
      
      // ============ Load creation history =============== //
      const creationHistoryStr = localStorage.getItem('url_creation_history') || '[]';
      const parsedCreationHistory = JSON.parse(creationHistoryStr);
      setCreationHistory(parsedCreationHistory);
    } catch (err) {
      console.error('Error loading history:', err);
      toast.error('Failed to load history data');
    } finally {
      setIsLoading(false);
    }
  };

  // ================= Format date for display ============== // 
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // ================= Truncate long URLs =============== //
  const truncateUrl = (url: string, maxLength: number = 40) => {
  return url.length > maxLength ? url.substring(0, maxLength) + '...' : url;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">URL History</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2"onClick={loadHistory}><RefreshCw className="h-4 w-4" />Refresh
          </Button>
          <Link to="/dashboard/urls">
          <Button variant="outline" className="flex items-center gap-2"><ArrowLeft className="h-4 w-4" />Back to URLs</Button>
          </Link>
        </div>
      </div>

      {/* URL Creation History */}
      <Card>
        <CardHeader>
          <CardTitle>URL Creation History</CardTitle>
          <CardDescription>Track when URLs were created </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
            <div className="h-10 w-10 border-4 border-t-brand-500 border-brand-100 rounded-full animate-spin"></div>
            </div>
          ) : creationHistory.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">No URL creation history yet.</p>
              <p className="text-gray-500 mt-2">When you create shortened URLs, they will appear here.</p>
              <Link to="/dashboard/urls">
              <Button variant="outline" className="mt-4">Create New URL</Button>
              </Link>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Short URL</TableHead>
                    <TableHead>Original URL</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Created By</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {creationHistory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.shortUrl}</TableCell>
                      <TableCell>
                        <div className="max-w-[200px] truncate" title={item.originalUrl}>
                        {truncateUrl(item.originalUrl)}
                        </div>
                      </TableCell>
                      <TableCell>{formatDate(item.createdAt)}</TableCell>
                      <TableCell>{item.createdBy || 'Anonymous'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
      {/* URL Visit History */}
      <Card>
        <CardHeader>
          <CardTitle>URL Visit History</CardTitle>
          <CardDescription>Track when and how your shortened URLs are being accessed</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
            <div className="h-10 w-10 border-4 border-t-brand-500 border-brand-100 rounded-full animate-spin"></div>
            </div>
          ) : visitHistory.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500">No visit history yet.</p>
              <p className="text-gray-500 mt-2">When someone clicks on your shortened URLs, their visits will appear here.</p>
              <Link to="/dashboard/urls">
              <Button variant="outline" className="mt-4">View Your URLs</Button>
              </Link>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Short URL</TableHead>
                    <TableHead>Original URL</TableHead>
                    <TableHead>Visited At</TableHead>
                    <TableHead>Referrer</TableHead>
                    <TableHead>Device</TableHead>
                    <TableHead>Browser</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visitHistory.map((visit) => (
                    <TableRow key={visit.id}>
                      <TableCell className="font-medium">{visit.shortUrl}</TableCell>
                      <TableCell>
                        <div className="max-w-[200px] truncate" title={visit.originalUrl}>
                        {truncateUrl(visit.originalUrl)}
                        </div>
                      </TableCell>
                      <TableCell>{formatDate(visit.visitedAt)}</TableCell>
                      <TableCell>{visit.referrer}</TableCell>
                      <TableCell>{visit.device}</TableCell>
                      <TableCell>{visit.browser}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
 };

 export default HistoryPage;

