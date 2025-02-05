import HeroComponent from './components/HeroComponent';
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar';
import OngoingBidCard from '@/components/OngoingBidCard';
import { auctionItems } from '@/api/ProductData';
import BiddingCard from '@/components/product/BiddingCard';

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <HeroComponent />
      <SecondaryNavbar />
      <div className='flex flex-wrap justify-center gap-4'>
        <BiddingCard items={auctionItems} />
      </div>
    </div>
  );
};

export default HomePage;
