import { SignUp } from '@clerk/clerk-react';

export default function Signup() {
  return (
    <main
      className='grid lg:grid-cols-2 min-h-screen'
    >
      <div className='flex items-center justify-center'>
        <SignUp 
          routing="path" 
          path="/sign-up"
          signInUrl="/sign-in"
          forceRedirectUrl="/"
          FallbackRedirectUrl="/"
          signUpForceRedirectUrl="/"
          signUpFallbackRedirectUrl="/"
        />
      </div>
      <picture className='hidden lg:flex items-center justify-center bg-red-500 h-full'>
        <img src="/logo.png" alt="logo" />
      </picture>
    </main>
  );
}