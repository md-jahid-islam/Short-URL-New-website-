import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell 
 } from 'recharts';

 // ============= Mock data for charts =========== //
 const weeklyData = [
  { name: 'Mon', clicks: 40, unique: 24 },
  { name: 'Tue', clicks: 35, unique: 20 },
  { name: 'Wed', clicks: 55, unique: 31 },
  { name: 'Thu', clicks: 65, unique: 40 },
  { name: 'Fri', clicks: 75, unique: 45 },
  { name: 'Sat', clicks: 45, unique: 30 },
  { name: 'Sun', clicks: 30, unique: 18 },
 ];

 const deviceData = [
  { name: 'Desktop', value: 55 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 10 },
 ];

 const locationData = [
  { name: 'United States', value: 40 },
  { name: 'India', value: 15 },
  { name: 'United Kingdom', value: 12 },
  { name: 'Germany', value: 8 },
  { name: 'Canada', value: 6 },
  { name: 'Others', value: 19 },
 ];

 const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

 const AnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
          <p className="text-2xl font-bold">8,549</p>
          <p className="text-xs text-green-500 mt-1">↑ 24% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Unique Visitors</CardTitle>
          </CardHeader>
          <CardContent>
          <p className="text-2xl font-bold">5,271</p>
          <p className="text-xs text-green-500 mt-1">↑ 18% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Average CTR</CardTitle>
          </CardHeader>
          <CardContent>
          <p className="text-2xl font-bold">67.3%</p>
          <p className="text-xs text-red-500 mt-1">↓ 2% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Traffic Chart */}
      <Card>
        <CardHeader>
        <CardTitle>Weekly Traffic</CardTitle>
        <CardDescription>URL click performance over the past week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={weeklyData}
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
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="clicks" 
                  stroke="#0070f3" 
                  activeDot={{ r: 8 }} 
                  name="Total Clicks" />
                <Line 
                  type="monotone" 
                  dataKey="unique" 
                  stroke="#00c49f" 
                  name="Unique Visitors" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Device & Location Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
          <CardTitle>Device Breakdown</CardTitle>
          <CardDescription>Clicks by device type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                    {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
          <CardTitle>Top Locations</CardTitle>
          <CardDescription>Clicks by country</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={locationData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 50,
                    bottom: 5,}}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" scale="band" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" name="Percentage">
                  {locationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
 };

 export default AnalyticsPage;
