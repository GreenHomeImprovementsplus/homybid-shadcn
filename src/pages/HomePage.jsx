import OngoingBidCard from '@/components/OngoingBidCard';
import ProductCard from '@/components/ProductCard';

const Homepage = () => {
  return (
    <div className='flex flex-row'>
      <ProductCard />
      <OngoingBidCard />
    </div>
  );
};
export default Homepage;
