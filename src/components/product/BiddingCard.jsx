import { OngoingCard } from './OngoingBidCard';
import { PreBidCard } from './PrebidCard';

export default function BiddingCard({ items }) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {items.map((item) => (
          <div key={item.id} className='w-full'>
            {item.bidCategory === 'pre-bid' ? (
              <PreBidCard item={item} />
            ) : (
              <OngoingCard item={item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
