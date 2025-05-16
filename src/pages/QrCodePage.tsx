import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import QRCode from 'react-qr-code';

 const QrCodePage = () => {
  const { shortCode } = useParams<{ shortCode: string }>();
  const [shortUrl, setShortUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  
  useEffect(() => {
    if (shortCode) {
      const baseUrl = window.location.origin;
      setShortUrl(`${baseUrl}/s/${shortCode}`);
      
 // ========= For now, we'll just simulate it =========== //
    setOriginalUrl('https://example.com/very/long/url/that/needs/shortening');
    }
  }, [shortCode]);
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Share this short URL',
          text: 'Check out this shortened URL!',
          url: shortUrl,
        });
        toast.success('URL shared successfully!');
      } catch (error) {
        console.error('Error sharing URL:', error);
      }
    } else {
      // ============= Fallback for browsers that don't support navigator.share ========= //
      navigator.clipboard.writeText(shortUrl).then(() => {
      toast.success('URL copied to clipboard for sharing!');
      });
    }
  };
  
  // =========== Function to download QR code as PNG =========== //
  const downloadQRCode = () => {
    const svg = document.getElementById('qr-code');
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      
      // ==========Download the PNG file ========== //
      const downloadLink = document.createElement('a');
      downloadLink.download = `qrcode-${shortCode}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
      
      toast.success('QR code downloaded!');
    };
    
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" />
              <path d="M9 17L15 17" />
              <path d="M9 13L15 13" />
              <path d="M9 9L11 9" />
            </svg>
            <span className="ml-2 text-2xl font-bold text-brand-800">LinkShort</span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          QR Code for Your Short URL
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
          Scan this QR code to access your shortened URL
          </p>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-center">Your Short URL</CardTitle>
            <CardDescription className="text-center break-all">
              <Link to={shortUrl} className="text-brand-600 hover:underline">
              {shortUrl}
              </Link>
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex justify-center pt-0">
            <div className="bg-white p-4 rounded-lg">
              <QRCode id="qr-code"value={shortUrl || 'https://example.com'} size={200} level="H"/>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex w-full space-x-2">
              <Button onClick={downloadQRCode} className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button onClick={handleShare} variant="outline" className="flex-1">
              <Share2 className="mr-2 h-4 w-4" />Share
              </Button>
            </div>
            <div className="flex w-full">
              <Link to="/dashboard/urls" className="w-full">
              <Button variant="secondary" className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to URLs</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
        
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">
          Original URL: <span className="text-gray-700">{originalUrl}</span>
          </span>
        </div>
      </div>
    </div>
  );
 };

 export default QrCodePage;
