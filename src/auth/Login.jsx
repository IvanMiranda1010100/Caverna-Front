import { SignIn } from '@clerk/clerk-react';

export default function Login() {
  return (
    <main className='grid lg:grid-cols-2 min-h-screen'>
      <div className='flex items-center justify-center'>
        <SignIn 
          routing="path" 
          path="/sign-in"
          signUpUrl="/sign-up"
          forceRedirectUrl="/"
          FallbackRedirectUrl="/"
        />
      </div>
      <picture className='hidden lg:flex items-center justify-center bg-red-500 h-full'>
        <img src="/logo.png" alt="logo" />
      </picture>
    </main>
  );
}
