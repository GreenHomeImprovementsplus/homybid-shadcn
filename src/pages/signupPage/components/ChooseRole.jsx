import { Briefcase, Gavel } from 'lucide-react';

import { Card } from '@/components/ui/card';

export default function ChooseRole() {
  return (
    <div className='w-full max-w-3xl mx-auto px-4 py-12'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-semibold mb-2'>Choose Your Role</h1>
        <p className='text-muted-foreground'>
          Select how you'd like to join our platform
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        <Card className='group relative overflow-hidden transition-colors hover:border-primary'>
          <a href='/signup?role=contractor' className='block p-6'>
            <div className='mb-4'>
              <div className='inline-block p-2 rounded-lg bg-blue-50'>
                <Briefcase className='w-6 h-6 text-blue-500' />
              </div>
            </div>
            <h2 className='text-xl font-semibold mb-2'>Contractor</h2>
            <p className='text-muted-foreground text-sm mb-4'>
              Post contracts and find qualified bidders for your projects
            </p>
            <div className='text-sm text-blue-500 font-medium group-hover:underline'>
              Sign up as Contractor →
            </div>
          </a>
        </Card>

        <Card className='group relative overflow-hidden transition-colors hover:border-primary'>
          <a href='/signup?role=bidder' className='block p-6'>
            <div className='mb-4'>
              <div className='inline-block p-2 rounded-lg bg-green-50'>
                <Gavel className='w-6 h-6 text-green-500' />
              </div>
            </div>
            <h2 className='text-xl font-semibold mb-2'>Bidder</h2>
            <p className='text-muted-foreground text-sm mb-4'>
              Find Auctions and submit competitive bids
            </p>
            <div className='text-sm text-green-500 font-medium group-hover:underline'>
              Sign up as Bidder →
            </div>
          </a>
        </Card>
      </div>
    </div>
  );
}
