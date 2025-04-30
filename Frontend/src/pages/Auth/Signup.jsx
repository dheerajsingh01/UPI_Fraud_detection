
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './ AuthLayout.jsx';
import AuthForm from '../../componennts/Authentication/AuthForm.jsx';
import AuthSocial from '../../componennts/Authentication/AuthSocial.jsx';
import { registerUser } from '../../api.js';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await registerUser(formData);
      console.log('Signed up:', response);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create a new account"
      subtitle="Join thousands of users protecting their UPI transactions"
    >
      <AuthForm type="signup" onSubmit={handleSubmit} loading={loading} />
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-[#4B5563]">
              Or sign up with
            </span>
          </div>
        </div>

        <AuthSocial />

        <div className="mt-6 text-center">
          <p className="text-sm text-[#4B5563]">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-medium text-[#17C3B2] hover:text-[#0D9488]"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;