import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';

const ProductCard = () => {
  return (
    <Card className='w-80 rounded-lg overflow-hidden shadow-md'>
      <img
        src='https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI'
        alt='Card Image'
        className='object-cover w-full h-48 rounded-t-xl'
      />
      <div
        style={{ backgroundColor: '#fccd38' }}
        className='text-xs font-semibold rounded-full px-2 py-1 mt-2 w-32 text-center ml-4'
      >
        Starting Soon
      </div>
      <CardHeader className='pt-2'>
        <div className='flex justify-between items-center w-full'>
          <CardTitle className='text-lg flex-grow mb-1'>
            $25k Swimming Pool
          </CardTitle>
          <span className='text-sm text-gray-600'>ID: #5829</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <span className='text-sm font-semibold'>Current Bids:</span>
            <span className='text-sm font-semibold'>Required Bids:</span>
          </div>
          <div>
            <div className='h-2 bg-gray-200 rounded mt-1'>
              <div
                className='h-full bg-black rounded'
                style={{ width: '50%' }}
              ></div>
            </div>
          </div>

          <div className='flex justify-between '>
            <p className='text-sm'>120</p>
            <p className='text-sm'>250</p>
          </div>

          <div className='mt-4 p-4 border bg-gray-300 rounded-lg'>
            <div className='flex items-center justify-between'>
              <FontAwesomeIcon icon={faUser} className='text-gray-600 mr-1' />
              <p className='text-sm font-semibold mr-auto'>Last Bid: Bob</p>
              <p className='text-sm font-thin'>130 Bids to go</p>
            </div>
          </div>

          <hr className='my-4 border-gray-300' />

          <div className=' flex flex-col gap-y-2'>
            <Button className='bg-black text-white'>Bid Now</Button>
            <Button className='bg-gray-400 '>1 BID = $100</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
