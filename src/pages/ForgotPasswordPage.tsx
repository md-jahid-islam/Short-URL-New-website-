
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '@/hooks/useForm';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
 interface ForgotPasswordFormValues {
 email: string;
 }

const ForgotPasswordPage = () => {
  const { forgotPassword } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (values: ForgotPasswordFormValues) => {
    const errors: Record<string, string> = {};
    
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm<ForgotPasswordFormValues>(
    { email: '' },
    validate
  );

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    setIsSubmitting(true);
    
    try {
      await forgotPassword(values.email);
      setSubmitted(true);
      toast.success('Password reset email sent!');
    } catch (error) {
      toast.error('Failed to process request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Reset your password</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {!submitted ? (
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" className="auth-input" value={values.email} onChange={handleChange}/>
                {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
                </div>
              </div>

              <div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
              <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
              </>
              ) : (
              'Send reset link')}
              </Button>
              </div>
            </form>
          ) : (
            <div className="py-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Check your email</h3>
              <div className="mt-2">
              <p className="text-sm text-gray-500">We've sent a password reset link to {values.email}. Please check your inbox.</p>
              </div>
              <div className="mt-6">
              <Link to="/login">
              <Button variant="outline" className="w-full">Return to login</Button>
              </Link>
              </div>
            </div>
          )}
          
          <div className="mt-6">
            <div className="relative">
            <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
            </div>
            </div>
            <div className="mt-6 flex justify-center">
            <Link to="/login" className="text-sm font-medium text-brand-600 hover:text-brand-500">Back to login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 };
 export default ForgotPasswordPage;
