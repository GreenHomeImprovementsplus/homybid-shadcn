export default function ChooseRole({ onRoleSelect }) {
  return (
    <div className='w-full max-w-3xl mx-auto px-4 py-12'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-semibold mb-2'>Choose Your Role</h1>
        <p className='text-muted-foreground'>
          Select how you'd like to join our platform
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        <div className='group relative overflow-hidden transition-colors hover:border-primary border rounded-lg'>
          <button
            onClick={() => onRoleSelect('contractor')}
            className='block p-6 w-full text-left'
          >
            <div className='mb-4'>
              <div className='inline-block p-2 rounded-lg bg-blue-50'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-6 h-6 text-blue-500'
                >
                  <path d='M20 7h-7m0 0H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5m-7-4v4m0 0v5m0-5h7m-7 0H6' />
                </svg>
              </div>
            </div>
            <h2 className='text-xl font-semibold mb-2'>Contractor</h2>
            <p className='text-muted-foreground text-sm mb-4'>
              Post contracts and find qualified bidders for your projects
            </p>
            <div className='text-sm text-blue-500 font-medium group-hover:underline'>
              Sign up as Contractor →
            </div>
          </button>
        </div>

        <div className='group relative overflow-hidden transition-colors hover:border-primary border rounded-lg'>
          <button
            onClick={() => onRoleSelect('bidder')}
            className='block p-6 w-full text-left'
          >
            <div className='mb-4'>
              <div className='inline-block p-2 rounded-lg bg-green-50'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-6 h-6 text-green-500'
                >
                  <path d='m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z' />
                </svg>
              </div>
            </div>
            <h2 className='text-xl font-semibold mb-2'>Bidder</h2>
            <p className='text-muted-foreground text-sm mb-4'>
              Find Auctions and submit competitive bids
            </p>
            <div className='text-sm text-green-500 font-medium group-hover:underline'>
              Sign up as Bidder →
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
