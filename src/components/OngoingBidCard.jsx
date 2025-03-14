import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Users, Timer } from 'lucide-react';
import { useCountdownTimer } from '@/api/useCountdownTimer';

const OngoingBidCard = ({
  initialTime,
  itemName,
  image,
  itemId,
  lastBid,
  bidTotal,
  lastBidder,
}) => {
  const { formattedTime } = useCountdownTimer(initialTime);

  return (
    <Card className='w-full overflow-hidden'>
      <img
        src={image}
        alt={itemName}
        className='w-full h-[200px] object-cover'
      />
      <CardContent className='p-4 space-y-3'>
        <div className='pb-1 flex justify-between items-center'>
          <Badge className='bg-red-500 border-red-600 text-white font-semibold hover:bg-red-500 flex items-center gap-2'>
            <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
            Live Auction
          </Badge>
          <div className='bg-gray-200 border border-gray-300 rounded-full px-3 py-1 flex items-center gap-2 text-sm'>
            <Timer size={16} />
            <span>{formattedTime}</span>
          </div>
        </div>
        <div className='space-y-3'>
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>{itemName}</h3>
            <span className='text-sm text-muted-foreground'>ID: {itemId}</span>
          </div>
          <div className='space-y-1'>
            <div className='flex justify-between items-center text-xs text-muted-foreground'>
              <span>Last Bid</span>
              <span>Bid Total</span>
            </div>
            <Progress value={(lastBid / bidTotal) * 100} className='h-2' />
            <div className='flex justify-between items-center text-sm font-medium'>
              <span>${lastBid}</span>
              <span>${bidTotal}</span>
            </div>
          </div>
          <div className='bg-gray-300 rounded-md p-2 flex justify-between items-center text-sm'>
            <div className='flex items-center gap-2'>
              <Users size={16} />
              <span className='truncate'>
                {lastBidder} bid ${lastBid}
              </span>
            </div>
            <span className='text-muted-foreground whitespace-nowrap'>
              2mins ago
            </span>
          </div>
        </div>
      </CardContent>
      <Separator className='mx-4' />
      <CardFooter className='p-4 flex flex-col gap-2'>
        <Button className='w-full bg-black hover:bg-gray-800 text-white'>
          Place Bid
        </Button>
        <Button
          variant='outline'
          className='w-full border-black text-black hover:bg-gray-100'
        >
          BUY IT NOW FOR ${bidTotal * 2}
        </Button>
      </CardFooter>
    </Card>
  );
};
export default OngoingBidCard;
