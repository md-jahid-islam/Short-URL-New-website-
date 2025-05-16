import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '@/hooks/useForm';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Loader2, Lock, Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = (values: LoginFormValues) => {
    const errors: Record<string, string> = {};
    
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm<LoginFormValues>(
    {
      email: '',
      password: '',
    },
    validate
  );

  const onSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);
    
    try {
      await login(values.email, values.password);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" />
              <path d="M9 17L15 17" />
              <path d="M9 13L15 13" />
              <path d="M9 9L11 9" />
            </svg>
            <span className="ml-2 text-2xl font-bold text-brand-800">LinkShort</span>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Or{' '}
        <Link to="/register" className="font-medium text-brand-600 hover:text-brand-500">create a new account</Link></p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email address</Label>
              <Input id="email"name="email" type="email"autoComplete="email"className="text-center" value={values.email}onChange={handleChange}/>
              {errors.email && (
            <p className="mt-1 text-sm text-red-600 text-left">{errors.email}</p>)}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">Password</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Lock className="h-4 w-4 text-gray-500" />
                </span>
                <Input id="password"name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" className="pl-10 text-center" value={values.password} onChange={handleChange}/>
                <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"onClick={togglePasswordVisibility}tabIndex={-1}>
                  {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                  ) : (
                  <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
              <p className="mt-1 text-sm text-red-600 text-left">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
              <input id="remember-me" name="remember-me"type="checkbox"className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"/>
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>

              <div className="text-sm text-center w-1/2">
              <Link to="/forgot-password" className="font-medium text-brand-600 hover:text-brand-500">Forgot your password?</Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full text-center" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in...
                  </>
                ) : (
                'Sign in'
                )}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a href="#" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div>
                <a href="#" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                  <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                  <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                  <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.25 12.0004 19.25C8.8704 19.25 6.21537 17.14 5.2654 14.295L1.27539 17.39C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 };

 export default LoginPage;
