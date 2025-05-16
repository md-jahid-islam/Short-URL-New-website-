 import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
 interface User {
  id: string;
  email: string;
  name: string;
 }

 interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  loading: boolean;
 }

 const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  forgotPassword: async () => {},
  resetPassword: async () => {},
  loading: true
 });

 export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // ======== Check if user is logged in from localStorage  ======= //
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
      console.error('Failed to parse stored user', error);
      localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // ======= This would typically be an API call to your backend ========= //
  const login = async (email: string, password: string) => {
  
    setLoading(true);
    try {
      // ========= Simulate API call ======= //
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // ========= Mock successful login response ========= //
      const mockUser = {
      id: '1',
      email,
      name: email.split('@')[0] 
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration
      const mockUser = {
      id: '1',
      email,
      name
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const forgotPassword = async (email: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real implementation, this would send a reset email
    } catch (error) {
      console.error('Password reset request failed:', error);
      throw new Error('Failed to process password reset request');
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (token: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real implementation, this would reset the password using the token
    } catch (error) {
      console.error('Password reset failed:', error);
      throw new Error('Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider 
    value={{ 
        user, 
        isAuthenticated: !!user, 
        login, 
        register, 
        logout, 
        forgotPassword, 
        resetPassword,
        loading
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
