import { Home, RefreshCcw } from 'lucide-react';

const NotFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-zinc-100 text-zinc-800'>
      <div className='text-center px-4 py-8 max-w-md w-full'>
        <h1 className='text-9xl font-bold text-zinc-800'>404</h1>
        <div className='mt-4 space-y-6'>
          <h2 className='text-3xl font-bold text-zinc-700'>Page Not Found</h2>
          <p className='text-lg text-zinc-600'>
            Oops! The page you're looking for seems to have vanished into the
            digital void.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
            <a
              href='/'
              className='inline-flex items-center justify-center px-6 py-3 text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200 group'
            >
              <Home className='w-5 h-5 mr-2 group-hover:animate-bounce' />
              Go Home
            </a>
            <button
              onClick={() => window.location.reload()}
              className='inline-flex items-center justify-center px-6 py-3 text-zinc-800 bg-zinc-200 rounded-lg hover:bg-zinc-300 transition-colors duration-200 group'
            >
              <RefreshCcw className='w-5 h-5 mr-2 group-hover:animate-spin' />
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
