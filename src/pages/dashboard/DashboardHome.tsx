import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UrlShortener } from '@/components/url/UrlShortener';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

 // =============== Mock data for charts ============== //
 const clickData = [
  { name: 'Mon', clicks: 40 },
  { name: 'Tue', clicks: 35 },
  { name: 'Wed', clicks: 55 },
  { name: 'Thu', clicks: 65 },
  { name: 'Fri', clicks: 75 },
  { name: 'Sat', clicks: 45 },
  { name: 'Sun', clicks: 30 },
 ];

 const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="stat-card">
        <h3 className="text-sm font-medium text-gray-500">Total URLs</h3>
        <p className="text-2xl font-bold">127</p>
        <p className="text-xs text-green-500 mt-1">↑ 12% from last month</p>
        </div>
        
        <div className="stat-card">
        <h3 className="text-sm font-medium text-gray-500">Total Clicks</h3>
        <p className="text-2xl font-bold">8,549</p>
        <p className="text-xs text-green-500 mt-1">↑ 24% from last month</p>
        </div>
        
        <div className="stat-card">
        <h3 className="text-sm font-medium text-gray-500">Average CTR</h3>
        <p className="text-2xl font-bold">67.3%</p>
        <p className="text-xs text-red-500 mt-1">↓ 2% from last month</p>
        </div>
        
        <div className="stat-card">
        <h3 className="text-sm font-medium text-gray-500">Active URLs</h3>
        <p className="text-2xl font-bold">98</p>
        <p className="text-xs text-gray-500 mt-1">No change from last month</p>
        </div>
      </div>

      {/* URL Shortener */}
      <Card>
        <CardHeader>
        <CardTitle>Shorten a URL</CardTitle>
        <CardDescription> Create a new shortened URL in seconds </CardDescription>
        </CardHeader>
        <CardContent>
        <UrlShortener />
        </CardContent>
      </Card>

      {/* Analytics Overview */}
      <Card>
        <CardHeader>
        <CardTitle>Click Analytics</CardTitle>
        <CardDescription> Link performance over the past week </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={clickData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="clicks" fill="#0070f3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
          <CardTitle>Recent URLs</CardTitle>
          <CardDescription>View and manage your recent links</CardDescription>
          </CardHeader>
          <CardContent>
          <Link to="/dashboard/urls">
          <Button className="w-full">View All URLs
          </Button>
          </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
          <CardTitle>Detailed Analytics</CardTitle>
          <CardDescription>Get insights on your link performance</CardDescription>
          </CardHeader>
          <CardContent>
          <Link to="/dashboard/analytics">
          <Button className="w-full">View Analytics
          </Button>
          </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Update your profile and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/dashboard/settings">
              <Button className="w-full">Manage Account
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
 };

 export default DashboardHome;
