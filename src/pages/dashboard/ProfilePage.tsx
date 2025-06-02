import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

 interface ProfileFormValues {
  fullName: string;
  email: string;
  bio: string;
  company: string;
  location: string;
  website: string;
  twitter: string;
  github: string;
 }

 interface PasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
 }

 const ProfilePage = () => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const [profileValues, setProfileValues] = useState<ProfileFormValues>({
    fullName: 'Jahidul Islam',
    email: 'jahidulislamwebbd@gmail.com',
    bio: 'add Your Bio here',
    company: 'Your Company Name',
    location: 'Your City, Your Country',
    website: 'Your Website url',
    twitter: 'Your__Twitter_hendle',
    github: 'Your__Github_hendle',
  });

  const [passwordValues, setPasswordValues] = useState<PasswordFormValues>({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [qrCodeUrl] = useState('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=otpauth://totp/LinkShort:john@example.com?secret=JBSWY3DPEHPK3PXP&issuer=LinkShort');

  // ========== Form validation state ============ //
  const [profileErrors, setProfileErrors] = useState<Partial<ProfileFormValues>>({});
  const [passwordErrors, setPasswordErrors] = useState<Partial<PasswordFormValues>>({});
  const [isProfileFormValid, setIsProfileFormValid] = useState(false);
  const [isPasswordFormValid, setIsPasswordFormValid] = useState(false);

  // ============  Validate profile form =========== // 
  useEffect(() => {
    const errors: Partial<ProfileFormValues> = {};
    
    if (profileValues.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
    }
    
    if (!profileValues.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.email = 'Valid email is required';
    }
    
    if (profileValues.website && !profileValues.website.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/)) {
    errors.website = 'Enter a valid URL';
    }
    
    setProfileErrors(errors);
    setIsProfileFormValid(Object.keys(errors).length === 0);
  }, [profileValues]);

  // =========== Validate password form ============== // 
  useEffect(() => {
    const errors: Partial<PasswordFormValues> = {};
    
    if (passwordValues.currentPassword.length < 8) {
    errors.currentPassword = 'Password must be at least 8 characters';
    }
    
    if (passwordValues.newPassword.length < 8) {
    errors.newPassword = 'New password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(passwordValues.newPassword)) {
    errors.newPassword = 'Password must contain uppercase, lowercase and numbers';
    }
    
    if (passwordValues.newPassword !== passwordValues.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
    }
    
    setPasswordErrors(errors);
    setIsPasswordFormValid(Object.keys(errors).length === 0 && 
    passwordValues.currentPassword.length > 0 && 
    passwordValues.newPassword.length > 0 && 
    passwordValues.confirmPassword.length > 0);
  }, [passwordValues]);
  
  // =========== handle Profile Change ================ //
  const handleProfileChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setProfileValues(prev => ({ ...prev, [name]: value }));
  };

  // ============= handle Password Change ================ //
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setPasswordValues(prev => ({ ...prev, [name]: value }));
  };
  
  // ============ handle Profile Submit ================ //
  const handleProfileSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isProfileFormValid) return;

    // ============ API call would go here ========== // 
    setTimeout(() => {
      toast({
      title: "Profile updated",
      description: "Your profile information has been updated.",
      });
    }, 1000);
  };

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isPasswordFormValid) return;

    // ========= API call would go here ============ //
    setTimeout(() => {
      toast({
      title: "Password changed",
      description: "Your password has been changed successfully.",
      });
      setPasswordValues({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      });
    }, 1000);
  };

  const handleTwoFactorSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (verificationCode.length !== 6 || !/^\d+$/.test(verificationCode)) {
      toast({
      title: "Invalid code",
      description: "Please enter a valid 6-digit code.",
      variant: "destructive",
      });
      return;
    }

    // ========== This would verify with an API in a real app ========== //
    setTimeout(() => {
      setTwoFactorEnabled(true);
      toast({
        title: "Two-factor authentication enabled",
        description: "Your account is now more secure.",
      });
      setVerificationCode('');
    }, 1000);
  };

  // =========== This would make an API call in a real app ========= //
  const handleDisableTwoFactor = () => {
    setTimeout(() => {
      setTwoFactorEnabled(false);
      toast({
        title: "Two-factor authentication disabled",
        description: "Two-factor authentication has been disabled.",
      });
    }, 1000);
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      setProfileImageFile(file);
      
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
        setProfileImage(event.target.result);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageUpload = async () => {
    if (!profileImageFile) return;

    setIsUploading(true);
   // ============  For now, we'll just simulate a delay =========== // 
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
    title: "Profile image updated",
    description: "Your profile image has been updated successfully.",
    });
    
    setIsUploading(false);
  };
  
  // ============ handle Remove Profile Image ================ //
  const handleRemoveProfileImage = () => {
    setProfileImage(null);
    setProfileImageFile(null);
    toast({
    title: "Profile image removed",
    description: "Your profile image has been removed.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
      <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
      <p className="text-muted-foreground">Manage your account settings and profile information</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="2fa">Two-Factor Auth</TabsTrigger>
        </TabsList>
      
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription>Upload a profile picture to personalize your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileImage || undefined} />
                  <AvatarFallback className="text-3xl">
                    {profileValues.fullName
                    .split(' ')
                    .map(name => name[0])
                    .join('')
                    .toUpperCase()
                    .substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Label htmlFor="picture" className="cursor-pointer inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Upload Photo</Label>
                    <Input id="picture" type="file" accept="image/*" className="hidden" onChange={handleProfileImageChange} />
                    {profileImage && (
                      <>
                        {!isUploading ? (
                          <>
                            <Button variant="outline" onClick={handleProfileImageUpload}>
                            Save
                            </Button>
                            <Button variant="outline" onClick={handleRemoveProfileImage}>
                            Remove
                            </Button>
                          </>
                        ) : (
                          <div className="loader-dots ml-2">
                          <div></div>
                          <div></div>
                          <div></div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">JPG, PNG or GIF, Max size: 2MB</p>
                </div>
              </div>
            </CardContent>
          </Card>         
          <Card>
            <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" name="fullName" value={profileValues.fullName}onChange={handleProfileChange} className={profileErrors.fullName ? "border-red-500" : ""}/>
                    {profileErrors.fullName && (
                    <p className="text-sm text-red-500">{profileErrors.fullName}</p>
                    )}
                  </div>                  
                  <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email"name="email" type="email"value={profileValues.email}onChange={handleProfileChange}className={profileErrors.email ? "border-red-500" : ""}/>
                  {profileErrors.email && (
                  <p className="text-sm text-red-500">{profileErrors.email}</p>)}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio"name="bio"value={profileValues.bio}onChange={handleProfileChange}rows={3}/>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input  id="company"
                      name="company" value={profileValues.company} onChange={handleProfileChange} />
                  </div>                  
                 <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location"value={profileValues.location}onChange={handleProfileChange}/>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" name="website"type="url" value={profileValues.website} onChange={handleProfileChange}className={profileErrors.website ? "border-red-500" : ""}/>
                    {profileErrors.website && (
                    <p className="text-sm text-red-500">{profileErrors.website}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input id="twitter"name="twitter"value={profileValues.twitter}onChange={handleProfileChange}/>
                  </div>
                  
                  <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <Input id="github" name="github" value={profileValues.github} onChange={handleProfileChange}/>
                  </div>
                </div>               
                <Button type="submit" disabled={!isProfileFormValid}>Update Profile</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>        
        <TabsContent value="password" className="space-y-6">
          <Card>
          <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your password to keep your account secure</CardDescription>
          </CardHeader>
          <CardContent>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <div className="relative">
                <Input id="currentPassword" name="currentPassword"type={showCurrentPassword ? "text" : "password"} value={passwordValues.currentPassword}onChange={handlePasswordChange} className={passwordErrors.currentPassword ? "border-red-500 pr-10" : "pr-10"}/>
                <button type="button"className="absolute inset-y-0 right-0 flex items-center pr-3"onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                      {showCurrentPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-gray-500" />
                      ) : (
                      <EyeIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  {passwordErrors.currentPassword && (
                  <p className="text-sm text-red-500">{passwordErrors.currentPassword}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <div className="relative">
                  <Input id="newPassword" name="newPassword" type={showNewPassword ? "text" : "password"} value={passwordValues.newPassword} onChange={handlePasswordChange}
                  className={passwordErrors.newPassword ? "border-red-500 pr-10" : "pr-10"}/>
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={() => setShowNewPassword(!showNewPassword)}>
                      {showNewPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-gray-500" />
                      ) : (
                      <EyeIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  {passwordErrors.newPassword && (
                  <p className="text-sm text-red-500">{passwordErrors.newPassword}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <div className="relative">
                    <Input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={passwordValues.confirmPassword} onChange={handlePasswordChange}className={passwordErrors.confirmPassword ? "border-red-500 pr-10" : "pr-10"}/>
                    <button type="button"className="absolute inset-y-0 right-0 flex items-center pr-3"onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-gray-500" />
                      ) : (
                      <EyeIcon className="h-4 w-4 text-gray-500" />)}
                    </button>
                  </div>
                  {passwordErrors.confirmPassword && (
                  <p className="text-sm text-red-500">{passwordErrors.confirmPassword}</p>)}
                </div>                
                <Button type="submit" disabled={!isPasswordFormValid}>Change Password</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>        
        <TabsContent value="2fa" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
                </div>
                <Switch 
                checked={twoFactorEnabled}onCheckedChange={(checked) => {
                if (!checked) {
                handleDisableTwoFactor();}}}/>
              </div>
            </CardHeader>
            <CardContent>
              {!twoFactorEnabled ? (
                <form onSubmit={handleTwoFactorSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                      <h3 className="font-medium">Step 1: Scan this QR code with your authenticator app</h3>
                      <div className="flex justify-center">
                      <img src={qrCodeUrl} alt="2FA QR Code" className="border p-2 rounded-lg" />
                      </div>
                    </div>                   
                    <div className="space-y-2">
                    <Label htmlFor="verificationCode">Step 2: Enter the 6-digit code from your app</Label>
                    <Input id="verificationCode" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)}placeholder="123456"maxLength={6}/>
                    </div>
                  </div>                 
                  <Button type="submit" disabled={verificationCode.length !== 6}>Verify and Enable</Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <div>
                    <p className="font-medium">Two-factor authentication is enabled</p>
                    <p className="text-sm">Your account is now more secure with an additional layer of protection.</p>
                    </div>
                  </div>                 
                  <div>
                  <p className="text-sm text-muted-foreground">To disable two-factor authentication, toggle the switch at the top of this card. Note that this will make your account less secure.</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
 };

 export default ProfilePage;
