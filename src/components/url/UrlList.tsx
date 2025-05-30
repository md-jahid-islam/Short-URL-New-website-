// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { CopyIcon, QrCode, Edit, Trash2, ExternalLink } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { toast } from 'sonner';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,} from "@/components/ui/dialog";
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

//  interface UrlData {
//   originalUrl: string;
//   shortUrl: string;
//   shortCode: string;
//   createdAt: string;
//   clicks: number;
//  }

//  export const UrlList: React.FC = () => {
//   const [urls, setUrls] = useState<UrlData[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [editingUrl, setEditingUrl] = useState<UrlData | null>(null);
//   const [editValue, setEditValue] = useState('');
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [deleteConfirmUrl, setDeleteConfirmUrl] = useState<UrlData | null>(null);
//   const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

//   // ========== Fetch URLs from localStorage mock database ============ //
//   useEffect(() => {
//     loadUrls();
//   }, []);

//   const loadUrls = () => {
//     try {
//       const urlsStr = localStorage.getItem('shortened_urls') || '[]';
//       const parsedUrls = JSON.parse(urlsStr);
//       setUrls(parsedUrls);
//     } catch (err) {
//       console.error('Error loading URLs:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = (url: UrlData) => {
//     setDeleteConfirmUrl(url);
//     setIsDeleteDialogOpen(true);
//   };

//   const confirmDelete = () => {
//     if (!deleteConfirmUrl) return;
    
//     const newUrls = urls.filter(u => u.shortCode !== deleteConfirmUrl.shortCode);
//     setUrls(newUrls);
//     localStorage.setItem('shortened_urls', JSON.stringify(newUrls));
//     toast.success('URL deleted successfully');
//     setIsDeleteDialogOpen(false);
//     setDeleteConfirmUrl(null);
//   };

//   const copyToClipboard = (url: string) => {
//     navigator.clipboard.writeText(url).then(() => {
//     toast.success('URL copied to clipboard!');
//     });
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     }).format(date);
//   };

//   // ============== Function to truncate long URLs ============ //
//   const truncateUrl = (url: string, maxLength: number = 40) => {
//   return url.length > maxLength ? `${url.substring(0, maxLength)}...` : url;
//   };

//   const handleEdit = (url: UrlData) => {
//     setEditingUrl(url);
//     setEditValue(url.originalUrl);
//     setIsDialogOpen(true);
//   };

//   const saveEdit = () => {
//     if (!editingUrl || !editValue) return;
//     // ============= Validate URL format ============= //
//     try {
//       new URL(editValue); 
      
//       const updatedUrls = urls.map(url => 
//       url.shortCode === editingUrl.shortCode 
//       ? { ...url, originalUrl: editValue } 
//       : url
//       );
      
//       setUrls(updatedUrls);
//       localStorage.setItem('shortened_urls', JSON.stringify(updatedUrls));
      
//       toast.success('URL updated successfully');
//       setIsDialogOpen(false);
//     } catch (err) {
//     toast.error('Please enter a valid URL');
//     }
//   };

//   if (isLoading) {
//     return (
//     <div className="flex justify-center items-center py-12">
//     <div className="h-10 w-10 border-4 border-t-brand-500 border-brand-100 rounded-full animate-spin"></div>
//     </div>
//     );}

//   if (urls.length === 0) {
//     return (
//       <div className="text-center py-12">
//       <p className="text-gray-500">You haven't created any short URLs yet.</p>
//       <p className="text-gray-500">Use the form above to shorten your first URL!</p>
//       </div>
//     );}

//   return (
//     <div className="overflow-hidden rounded-md border">
//       <Table>
//         <TableHeader>
//           <TableRow>
//           <TableHead>Original URL</TableHead>
//           <TableHead>Short URL</TableHead>
//           <TableHead>Created</TableHead>
//           <TableHead className="text-center">Clicks</TableHead>
//           <TableHead className="text-right">Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {urls.map((url, index) => (
//             <TableRow key={index}>
//               <TableCell>
//               <div className="max-w-xs truncate" title={url.originalUrl}>
//               {truncateUrl(url.originalUrl)}
//               </div>
//               </TableCell>
//               <TableCell>
//               <a href={url.shortUrl} target="_blank" rel="noopener noreferrer"className="font-medium text-brand-600 hover:underline flex items-center">{`lksh.rt/${url.shortCode}`}<ExternalLink className="ml-1 h-3 w-3" /></a>
//               </TableCell>
//               <TableCell>{formatDate(url.createdAt)}</TableCell>
//               <TableCell className="text-center">{url.clicks}</TableCell>
//               <TableCell>
//                 <div className="flex justify-end gap-2">
//                   <Button variant="ghost" size="sm"onClick={() => copyToClipboard(url.shortUrl)}title="Copy URL"><CopyIcon className="h-4 w-4" />
//                   </Button>
//                   <Link to={`/qr-code/${url.shortCode}`}>
//                     <Button variant="ghost" size="sm"title="View QR Code"><QrCode className="h-4 w-4" />
//                     </Button>
//                   </Link>
//                   <Button 
//                     variant="ghost" 
//                     size="sm"onClick={() => handleEdit(url)}title="Edit URL">
//                   <Edit className="h-4 w-4" />
//                   </Button>
//                   <Button variant="ghost" size="sm"onClick={() => handleDelete(url)}
//                   title="Delete URL">
//                   <Trash2 className="h-4 w-4 text-red-500" />
//                   </Button>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       {/* Edit URL Dialog */}
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit URL</DialogTitle>
//             <DialogDescription>
//             Update the original URL. The short URL will remain the same.
//             </DialogDescription>
//           </DialogHeader>
//           <div className="space-y-4 py-4">
//             <div className="space-y-2">
//             <Label htmlFor="edit-url">Original URL</Label>
//             <Input id="edit-url"value={editValue}onChange={(e) => setEditValue(e.target.value)}placeholder="https://example.com"className="text-black"/>
//             </div>
//             <div>
//             <Label>Short URL</Label>
//             <p className="text-sm text-gray-500">{editingUrl?.shortUrl}</p>
//             </div>
//           </div>
//           <DialogFooter>
//           <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
//           <Button onClick={saveEdit} className="bg-guardian-primary hover:bg-guardian-secondary text-white">Save Changes</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Delete Confirmation Dialog */}
//       <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Confirm Deletion</DialogTitle>
//             <DialogDescription>
//             Are you sure you want to delete this shortened URL? This action cannot be undone.
//             </DialogDescription>
//           </DialogHeader>
//           <div className="py-4">
//             <p className="text-sm font-medium">Short URL: {deleteConfirmUrl?.shortUrl}</p>
//             <p className="text-sm text-gray-500 truncate" title={deleteConfirmUrl?.originalUrl}>
//             Original: {truncateUrl(deleteConfirmUrl?.originalUrl || '', 50)}</p>
//           </div>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
//             <Button variant="destructive" onClick={confirmDelete}className="bg-red-600 text-white hover:bg-red-700">Delete URL
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
//  };

// ================ 2 ==================// 

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from '@/components/ui/table';
import {
  CopyIcon, QrCode, Edit, Trash2, ExternalLink
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

 // ========== interface UrlData ============ //
 interface UrlData {
  originalUrl: string;
  shortUrl: string;
  shortCode: string;
  createdAt: string;
  clicks: number;
}
 // ========= export UrlList ========== //
 export const UrlList: React.FC = () => {
  const [urls, setUrls] = useState<UrlData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingUrl, setEditingUrl] = useState<UrlData | null>(null);
  const [editValue, setEditValue] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteConfirmUrl, setDeleteConfirmUrl] = useState<UrlData | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

 // ============= useEffect ============= //
  useEffect(() => {
    const stored = localStorage.getItem('shortened_urls') || '[]';
    setUrls(JSON.parse(stored));
    setIsLoading(false);
  }, []);

  const handleCopy = (shortUrl: string, shortCode: string) => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      toast.success('Short URL copied!');

      // =========== Open in new tab ========== // 
      window.open(shortUrl, '_blank');

      // ============== Increment click count ============== //
      const updated = urls.map(url =>
        url.shortCode === shortCode ? { ...url, clicks: url.clicks + 1 } : url
      );
      setUrls(updated);
      localStorage.setItem('shortened_urls', JSON.stringify(updated));
    });
  };
 // =============  handleDelete ============= // 
  const handleDelete = (url: UrlData) => {
    setDeleteConfirmUrl(url);
    setIsDeleteDialogOpen(true);
  };
 // ============= confirmDelete ============ // 
  const confirmDelete = () => {
    if (!deleteConfirmUrl) return;

    const updated = urls.filter(u => u.shortCode !== deleteConfirmUrl.shortCode);
    setUrls(updated);
    localStorage.setItem('shortened_urls', JSON.stringify(updated));
    toast.success('URL deleted successfully');
    setDeleteConfirmUrl(null);
    setIsDeleteDialogOpen(false);
  };
  // ========== handleEdit ========== //
  const handleEdit = (url: UrlData) => {
    setEditingUrl(url);
    setEditValue(url.originalUrl);
    setIsDialogOpen(true);
  };
  // ======== saveEdit ========= // 
  const saveEdit = () => {
    if (!editingUrl) return;

    try {
      new URL(editValue);
      const updated = urls.map(u =>
        u.shortCode === editingUrl.shortCode
          ? { ...u, originalUrl: editValue }
          : u
      );
      setUrls(updated);
      localStorage.setItem('shortened_urls', JSON.stringify(updated));
      toast.success('URL updated!');
      setIsDialogOpen(false);
    } catch {
      toast.error('Invalid URL');
    }
  };
  // ======== formatDate ========== // 
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  // =========== isLoading =========== //
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
      <div className="h-10 w-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }
 
  if (urls.length === 0) {
    return (
      <div className="text-center text-gray-400 py-16">
        <p className="text-lg font-semibold">No URLs created yet.</p>
        <p className="text-sm mt-2">Start by shortening a URL above!</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border rounded-xl shadow-sm bg-white dark:bg-gray-900">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-gray-100 dark:bg-gray-800">
            <TableHead>Short Link</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-center">Clicks</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {urls.map((url, i) => (
            <TableRow key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <TableCell>
                <a href={url.originalUrl} target="_blank"rel="noopener noreferrer"className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline truncate">
                  {`lksh.rt/${url.shortCode}`}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </TableCell>
              <TableCell>{formatDate(url.createdAt)}</TableCell>
              <TableCell className="text-center">{url.clicks}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-1">
                  <Button variant="ghost"size="sm"onClick={() => handleCopy(url.shortUrl, url.shortCode)}title="Copy & Track">
                  <CopyIcon className="h-4 w-4 text-green-600" />
                  </Button>
                  <Link to={`/qr-code/${url.shortCode}`}>
                    <Button variant="ghost" size="sm" title="QR Code">
                    <QrCode className="h-4 w-4 text-purple-500" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(url)} title="Edit">
                  <Edit className="h-4 w-4 text-blue-500" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(url)} title="Delete">
                  <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Original URL</DialogTitle>
            <DialogDescription>
            Update the long URL. The short code remains unchanged.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
            <Label htmlFor="edit-url">Original URL</Label>
            <Input id="edit-url" value={editValue} onChange={(e) => setEditValue(e.target.value)}placeholder="https://example.com"/>
            </div>
            <div>
            <Label>Short URL</Label>
            <p className="text-sm text-gray-500">{editingUrl?.shortUrl}</p>
            </div>
          </div>
          <DialogFooter>
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button onClick={saveEdit} className="bg-blue-600 text-white hover:bg-blue-700">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete URL</DialogTitle>
            <DialogDescription>
            This action is irreversible. Do you want to continue?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-1">
          <p className="text-sm font-medium">Short URL: {deleteConfirmUrl?.shortUrl}</p>
          <p className="text-sm text-gray-500 truncate">{deleteConfirmUrl?.originalUrl}</p>
          </div>
          <DialogFooter>
          <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
          <Button variant="destructive" onClick={confirmDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
