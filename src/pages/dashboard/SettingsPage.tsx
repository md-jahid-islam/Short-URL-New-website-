import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Loader2, Moon, Sun } from 'lucide-react';
import { Input } from '@/components/ui/input';

 const SettingsPage: React.FC = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [generatingApi, setGeneratingApi] = useState(false);
  const [apiKey, setApiKey] = useState('');
  
  // ============ Settings state ============= //
  const [settings, setSettings] = useState({
    emailNotifications: true,
    marketingEmails: false,
    urlCreationEmails: true,
    weeklyReports: true,
    publicProfile: false,
    darkMode: localStorage.getItem('theme') === 'dark',
    customDomains: false,
    apiAccess: false,
  });
  
  useEffect(() => {
    // ============= Apply theme on component mount and when darkMode setting changes ============= //
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [settings.darkMode]);
  
  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };
  
    const handleSave = async () => {
    setIsUpdating(true);   
    // ========= Simulate API call =============== //
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Settings saved successfully!');
    } catch (error) {
      toast.error('Failed to save settings');
    } finally {
      setIsUpdating(false);
    }
  };
  
  // ============ Simulate API call ========== //
  const generateApiKey = async () => {
    setGeneratingApi(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // ========== // Generate a random API key ========== // 
      const key = 'lksh_' + Array(32)
        .fill(0)
        .map(() => Math.random().toString(36).charAt(2))
        .join('');
      
      setApiKey(key);
      setSettings(prev => ({ ...prev, apiAccess: true }));
      toast.success('API key generated successfully!');
    } catch (error) {
      toast.error('Failed to generate API key');
    } finally {
    setGeneratingApi(false);
    }
  };
  
  const copyApiKey = () => {
  navigator.clipboard.writeText(apiKey);
  toast.success('API key copied to clipboard!');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      <Button onClick={handleSave} disabled={isUpdating}>
        {isUpdating ? (
            <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
            </>
          ) : (
          'Save Changes'
          )}
        </Button>
      </div>     
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage how you receive notifications and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-gray-500">Receive email notifications</p>
              </div>
              <Switch checked={settings.emailNotifications} onCheckedChange={() => handleToggle('emailNotifications')}/>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
              <h4 className="font-medium">Marketing Emails</h4>
              <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
              </div>
              <Switch checked={settings.marketingEmails} onCheckedChange={() => handleToggle('marketingEmails')} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
              <h4 className="font-medium">URL Creation Emails</h4>
              <p className="text-sm text-gray-500">Get notified when a new URL is created</p>
              </div>
              <Switch checked={settings.urlCreationEmails} onCheckedChange={() => handleToggle('urlCreationEmails')} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
              <h4 className="font-medium">Weekly Reports</h4>
              <p className="text-sm text-gray-500">Receive weekly analytics reports</p>
              </div>
              <Switch checked={settings.weeklyReports} onCheckedChange={() => handleToggle('weeklyReports')} />
            </div>
          </CardContent>
        </Card>        
        <Card>
          <CardHeader>
          <CardTitle>Privacy & Display</CardTitle>
          <CardDescription>Manage your privacy and display settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
              <h4 className="font-medium">Public Profile</h4>
              <p className="text-sm text-gray-500">Make your profile visible to others</p>
              </div>
              <Switch checked={settings.publicProfile} onCheckedChange={() => handleToggle('publicProfile')} />
            </div>           
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
              <h4 className="font-medium">Theme</h4>
              {settings.darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </div>
              <div className="flex items-center gap-2">
              <span className="text-sm">Light</span>
              <Switch checked={settings.darkMode} onCheckedChange={() => handleToggle('darkMode')} />
              <span className="text-sm">Dark</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
          <CardTitle>Advanced Features</CardTitle>
          <CardDescription> Manage premium and advanced features </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
              <h4 className="font-medium">Custom Domains</h4>
              <p className="text-sm text-gray-500">Use your own domain for shortened URLs</p>
              </div>
              <Switch checked={settings.customDomains} onCheckedChange={() => handleToggle('customDomains')} />
            </div>
           
            <div className="flex items-center justify-between">
              <div>
              <h4 className="font-medium">API Access</h4>
              <p className="text-sm text-gray-500">Enable API access for automated URL creation</p>
              </div>
              <Switch checked={settings.apiAccess} onCheckedChange={() => handleToggle('apiAccess')} />
            </div>

            {apiKey && (
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium mb-2">Your API Key:</p>
                <div className="flex gap-2">
                <Input value={apiKey} readOnly className="font-mono text-sm" />
                <Button variant="secondary" onClick={copyApiKey}>Copy</Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">Keep this key secure! Don't share it publicly.</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Button variant="outline" onClick={generateApiKey} disabled={generatingApi}className="w-full sm:w-auto">
              {generatingApi ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                </>
              ) : (
              'Generate API Key'
              )}
            </Button>
            <p className="text-sm text-gray-500">This will generate a unique API key for your account.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
 };

 export default SettingsPage;
