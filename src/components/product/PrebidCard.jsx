import { Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

export function PreBidCard({ item }) {
  return (
    <Card className='w-full h-full overflow-hidden flex flex-col'>
      <img
        src={item.image}
        alt={item.itemName}
        width={400}
        height={200}
        className='w-full h-[200px] object-cover'
      />
      <CardContent className='p-4 space-y-3 flex-grow'>
        <div className='pb-1 flex justify-between items-center'>
          <Badge className='bg-yellow-500 border-yellow-600 text-black font-semibold hover:bg-yellow-500'>
            {item.totalBidder - item.currentBidder} bidders to start auction
          </Badge>
        </div>
        <div className='space-y-3'>
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>{item.itemName}</h3>
            <span className='text-sm text-muted-foreground'>
              ID: {item.itemId}
            </span>
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
            <Progress
              value={(item.currentBidder / item.totalBidder) * 100}
              className='h-2'
            />
            <div className='flex justify-between items-center text-sm font-medium'>
              <span>{item.currentBidder}</span>
              <span>{item.totalBidder}</span>
            </div>
          </div>
          <div className='bg-gray-300 rounded-md p-2 flex justify-between items-center text-sm'>
            <div className='flex items-center gap-2'>
              <Users size={16} />
              <span>{item.lastBidder} joined</span>
            </div>
            <span className='text-muted-foreground'>10mins ago</span>
          </div>
        </div>
      </CardContent>
      <Separator className='bg-gray-300 border-gray-600' />
      <CardFooter className='p-4 flex flex-col gap-2 mt-auto'>
        <Button className='w-full bg-black hover:bg-gray-800 text-white'>
          Join Now
        </Button>
        <Button variant='ghost' className='w-full'>
          1 BID = $100
        </Button>
      </CardFooter>
    </Card>
  );
}
