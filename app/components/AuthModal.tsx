import React, { useState } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSupabase } from '../context/SupabaseContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { supabase } = useSupabase();
  const [view, setView] = useState<'sign_in' | 'sign_up'>('sign_in');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-primary"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mb-4 flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded font-semibold ${view === 'sign_in' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setView('sign_in')}
          >
            Sign In
          </button>
          <button
            className={`px-4 py-2 rounded font-semibold ${view === 'sign_up' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setView('sign_up')}
          >
            Sign Up
          </button>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          view={view}
          onlyThirdPartyProviders={false}
          theme="light"
        />
      </div>
    </div>
  );
};

export default AuthModal; 