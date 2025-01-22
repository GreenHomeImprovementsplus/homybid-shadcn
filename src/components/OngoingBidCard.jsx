import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Timer, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import Pool from '../assets/pool.png';

const OngoingBidCard = () => {
  return (
    <Card className='w-80 rounded-lg overflow-hidden shadow-md'>
      <img
        src={Pool}
        alt='Card Image'
        className='object-cover w-full h-48 rounded-t-xl'
      />

      <CardHeader className='pt-2 flex justify-between'>
        <div className='flex justify-between'>
          <Badge
            variant='outline'
            className='bg-red-500 border-red-600 w-fit mr-2 text-white'
          >
            Live Auction
          </Badge>
          <Badge
            variant='outline'
            className='bg-gray-200 border-gray-300 w-fit'
          >
            <Timer size={18} />
            00:56:00
          </Badge>
        </div>
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
            <span className='text-sm font-semibold'>Last Bid</span>
            <span className='text-sm font-semibold'>Bid Total</span>
          </div>
          <Progress value={48} />
          <div className='flex justify-between '>
            <p className='text-sm'>$50</p>
            <p className='text-sm'>$5,050</p>
          </div>
          <div className='mt-4 p-4 border bg-gray-300 rounded-lg'>
            <div className='flex items-center justify-between'>
              <Users className='text-gray-600 mr-1' size={20} />
              <p className='text-sm font-semibold mr-auto'>Bob bid $50</p>
              <p className='text-sm font-thin'>10 mins ago</p>
            </div>
          </div>
          <Separator className='my-4 bg-gray-300 border-gray-600' />
          <div className='flex flex-col gap-y-2'>
            <Button className='bg-black text-white'>Bid Now</Button>
            <Button variant='outline'>BUY IT NOW FOR $12,500</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OngoingBidCard;
