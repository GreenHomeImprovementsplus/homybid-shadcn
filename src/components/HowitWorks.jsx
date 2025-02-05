import { Clock, Users, Gavel, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HowitWorks = () => {
  return (
    <>
      <h1 className='font-bold text-center mb-12'>How HomyBid Works</h1>

      <div className='grid md:grid-cols-3 gap-8'>
        {/* Pre-Bid Section */}
        <div className='bg-white rounded-lg shadow-md p-6'>
          <div className='flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mb-4 mx-auto'>
            <Users size={32} />
          </div>
          <h2 className='text-2xl font-semibold text-center mb-4'>
            1. Pre-Bid
          </h2>
          <ul className='space-y-2'>
            <li>• Auction is announced</li>
            <li>• Bidders register interest</li>
            <li>• Minimum number of bidders required</li>
            <li>• Once threshold is met, bidding can begin</li>
          </ul>
        </div>

        {/* Ongoing Bid Section */}
        <div className='bg-white rounded-lg shadow-md p-6'>
          <div className='flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mb-4 mx-auto'>
            <Clock size={32} />
          </div>
          <h2 className='text-2xl font-semibold text-center mb-4'>
            2. Ongoing Bid
          </h2>
          <ul className='space-y-2'>
            <li>• Bidding starts with a countdown timer (e.g., 1 hour)</li>
            <li>• Bidders place their bids</li>
            <li>• Each new bid resets the timer</li>
            <li>• Bidding continues until timer expires</li>
          </ul>
        </div>

        {/* Post-Bid Section */}
        <div className='bg-white rounded-lg shadow-md p-6'>
          <div className='flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-500 rounded-full mb-4 mx-auto'>
            <Gavel size={32} />
          </div>
          <h2 className='text-2xl font-semibold text-center mb-4'>
            3. Post-Bid
          </h2>
          <ul className='space-y-2'>
            <li>• Timer expires, bidding ends</li>
            <li>• Highest bidder is determined</li>
            <li>• Results are announced</li>
            <li>• Winner completes the transaction</li>
          </ul>
        </div>
      </div>

      <div className='mt-12 text-center'>
        <p className='text-xl mb-4'>Ready to start bidding?</p>
        <Button className='inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg'>
          View Active Auctions <CheckCircle className='ml-2' size={20} />
        </Button>
      </div>
    </>
  );
};
export default HowitWorks;
