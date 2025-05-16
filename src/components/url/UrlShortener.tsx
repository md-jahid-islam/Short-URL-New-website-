
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { CopyIcon, LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CreationHistoryItem {
  id: string;
  shortUrl: string;
  originalUrl: string;
  createdAt: string;
  createdBy: string;
}

export const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!url) {
      toast.error('Please enter a URL to shorten');
      return;
    }

    // Validate URL format
    try {
      new URL(url);
    } catch (err) {
      toast.error('Please enter a valid URL');
      return;
    }

    setIsLoading(true);

    try {
      // This would be an API call in a real application
      // For now, we'll simulate it
      await new Promise(resolve => setTimeout(resolve, 700));
      
      // Generate a short code - in a real app this would come from the API
      const shortCode = customAlias || Math.random().toString(36).substring(2, 8);
      const generatedShortUrl = `https://lksh.rt/${shortCode}`;
      
      setShortUrl(generatedShortUrl);
      
      // Store the URL in localStorage
      const storedUrls = JSON.parse(localStorage.getItem('shortened_urls') || '[]');
      const newUrl = {
        originalUrl: url,
        shortUrl: generatedShortUrl,
        shortCode,
        createdAt: new Date().toISOString(),
        clicks: 0
      };
      localStorage.setItem('shortened_urls', JSON.stringify([newUrl, ...storedUrls]));
      
      // Also store in creation history
      const creationHistory = JSON.parse(localStorage.getItem('url_creation_history') || '[]');
      const newHistoryItem: CreationHistoryItem = {
        id: Date.now().toString(),
        shortUrl: generatedShortUrl,
        originalUrl: url,
        createdAt: new Date().toISOString(),
        createdBy: 'Current User' // In a real app, this would be the actual user
      };
      localStorage.setItem('url_creation_history', JSON.stringify([newHistoryItem, ...creationHistory]));
      
      toast.success('URL shortened successfully!');
    } catch (error) {
      toast.error('Failed to shorten URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!shortUrl) return;
    
    try {
      await navigator.clipboard.writeText(shortUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
      toast.success('URL copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy URL');
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="url">Enter Long URL</Label>
          <Input 
            id="url" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="https://example.com/very/long/url/that/needs/shortening" 
            className="text-black"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="alias">Custom Alias (Optional)</Label>
          <Input 
            id="alias" 
            value={customAlias} 
            onChange={(e) => setCustomAlias(e.target.value)} 
            placeholder="my-custom-url" 
            className="text-black"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-guardian-primary hover:bg-blue-500" 
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loader-dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            'Shorten URL'
          )}
        </Button>
      </form>
      
      {shortUrl && (
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="truncate">
              <h4 className="text-sm font-medium text-gray-500">Your shortened URL:</h4>
              <a 
                href={shortUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline font-medium truncate block"
              >
                {shortUrl}
              </a>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleCopy} 
              className="flex-shrink-0 ml-2"
            >
              {showCopied ? 'Copied!' : <CopyIcon className="h-4 w-4" />}
            </Button>
          </div>
          <div className="flex gap-2 mt-4">
            <Link to={`/qr-code/${shortUrl.split('/').pop()}`} className="flex-1">
              <Button 
                variant="outline" 
                className="w-full bg-guardian-primary text-white hover:bg-guardian-secondary"
              >
                View QR Code
              </Button>
            </Link>
            <Link to="/dashboard/urls" className="flex-1">
              <Button className="w-full bg-guardian-primary hover:bg-guardian-secondary">
                View All URLs
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
