import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Users } from 'lucide-react';
import Pool from '../assets/pool.png';

const ProductCard = () => {
  return (
    <Card className='w-[350px] overflow-hidden'>
      <img
        src={Pool}
        alt='$25k Swimming Pool'
        className='object-cover w-full h-48 rounded-t-xl'
      />
      <CardContent className='p-4 space-y-3'>
        <div className='pb-1'>
          <Badge className='bg-yellow-500 border-yellow-600 text-black font-semibold hover:bg-yellow-500'>
            130 bidders to start auction
          </Badge>
        </div>
        <div className='space-y-3 pt-3'>
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>$25k Swimming Pool</h3>
            <span className='text-sm text-muted-foreground'>ID: #5829</span>
          </div>
          <div className='space-y-1'>
            <div className='flex justify-between items-center text-sm'>
              <span className='text-xs text-muted-foreground'>
                Current Bidders
              </span>
              <span className='text-xs text-muted-foreground'>
                Required Bidders
              </span>
            </div>
            <Progress value={48} className='h-2' />
            <div className='flex justify-between items-center text-sm font-medium'>
              <span>120</span>
              <span>250</span>
            </div>
          </div>
          <div className='bg-gray-300 rounded-md p-2 flex justify-between items-center text-sm'>
            <div className='flex items-center gap-2'>
              <Users size={16} />
              <span>Bob joined</span>
            </div>
            <span className='text-muted-foreground'>10mins ago</span>
          </div>
        </div>
      </CardContent>
      <Separator className='bg-gray-300 border-gray-600' />
      <CardFooter className='p-4 flex flex-col gap-2'>
        <Button className='w-full bg-black hover:bg-gray-800 text-white'>
          Join Now
        </Button>
        <Button variant='ghost' className='w-full'>
          1 BID = $100
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
