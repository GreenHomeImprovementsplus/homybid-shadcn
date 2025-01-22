import HeroComponent from '@/components/HeroComponent';
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar';
import OngoingBidCard from '@/components/OngoingBidCard';
import ProductCard from '@/components/ProductCard';

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <SecondaryNavbar />
      <div className='flex flex-row mt-5 space-x-4'>
        <ProductCard />
        <OngoingBidCard />
      </div>
    </>
  );
};
export default HomePage;
