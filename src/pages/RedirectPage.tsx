import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const RedirectPage: React.FC = () => {
  const { shortCode } = useParams<{ shortCode: string }>();
  const [originalUrl, setOriginalUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const fetchUrlDetails = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // ======== Mock data ========= //
        const shortUrls = {
          'abc123': 'https://www.example.com/very/long/url/that/needs/shortening',
          'def456': 'https://www.verylongdomainname.com/blog/article/how-to-create-short-urls',
          'ghi789': 'https://www.anotherexample.org/products/category/item/details',
        };
        
        const url = shortUrls[shortCode as keyof typeof shortUrls];
        
        if (url) {
          setOriginalUrl(url);
          
          // ========== Record the visit in history =========== //
          recordVisit(shortCode as string, url);
          
          // ========== Start countdown =========== // 
          const timer = setInterval(() => {
            setCountdown(c => {
              if (c <= 1) {
                clearInterval(timer);
                window.location.href = url;
                return 0;
              }
              return c - 1;
            });
          }, 1000);
          
          return () => clearInterval(timer);
        } else {
          setError('Short URL not found');
        }
      } catch (err) {
        console.error('Error fetching URL details:', err);
        setError('Failed to retrieve URL information');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUrlDetails();
  }, [shortCode]);
  
  // ======== Record visit in browser storage as a mock database ========== //
  const recordVisit = (shortCode: string, originalUrl: string) => {
    try {
      // Get existing history
      const historyStr = localStorage.getItem('url_visit_history') || '[]';
      const history = JSON.parse(historyStr);
      
      // ======= Add new entry =========== //
      history.unshift({
        id: Date.now().toString(),
        shortUrl: `lksh.rt/${shortCode}`,
        originalUrl,
        visitedAt: new Date().toISOString(),
        referrer: document.referrer || 'Direct',
        device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        browser: getBrowser(),
      });
      
      // ======= Save back to localStorage (limit to 100 entries) ======= //
      localStorage.setItem('url_visit_history', JSON.stringify(history.slice(0, 100)));
      
      // ========= Update visit counter for this URL ========== //
      const urlsStr = localStorage.getItem('shortened_urls') || '[]';
      const urls = JSON.parse(urlsStr);
      const urlIndex = urls.findIndex((u: any) => u.shortCode === shortCode);
      
      if (urlIndex >= 0) {
      urls[urlIndex].clicks = (urls[urlIndex].clicks || 0) + 1;
      localStorage.setItem('shortened_urls', JSON.stringify(urls));
      }
    } catch (e) {
      console.error('Error recording visit:', e);
    }
  };
  
  const getBrowser = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
    if (userAgent.indexOf('Safari') > -1) return 'Safari';
    if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
    if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) return 'IE';
    if (userAgent.indexOf('Edge') > -1) return 'Edge';
    return 'Unknown';
  };

  const handleRedirectNow = () => {
  window.location.href = originalUrl;
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
        <CardTitle>URL Redirect</CardTitle>
        <CardDescription> You are being redirected to the original URL
        </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex flex-col items-center py-4">
            <div className="h-12 w-12 rounded-full border-4 border-t-blue-500 border-gray-200 animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading URL information...</p>
            </div>
          ) : error ? (
            <div className="text-center py-4">
              <p className="text-red-500">{error}</p>
              <Button asChild variant="outline" className="mt-4"><a href="/">Back to Home</a></Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-700 mb-1">Short URL:</h3>
              <p className="font-mono break-all">lksh.rt/{shortCode}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-700 mb-1">Original URL:</h3>
              <p className="font-mono break-all text-sm">{originalUrl}</p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">Redirecting in <span className="font-bold">{countdown}</span> seconds...</p>
                <Button onClick={handleRedirectNow} className="flex items-center gap-2">Redirect Now <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
 };

 export default RedirectPage;
