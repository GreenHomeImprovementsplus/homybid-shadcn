import HeroComponent from '@/components/HeroComponent';
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar';
import ProductCard from '@/components/ProductCard';
import ProductDetails from '@/components/ProductDetails';
import ProductImage from '@/components/ProductImage';
import { auctionItems } from '@/api/ProductData';
import BiddingCard from '@/components/product/BiddingCard';

const HomePage = () => {
  return (
    <>
      {/* <ProductImage /> */}
      {/* <ProductDetails /> */}
      <HeroComponent />
      <SecondaryNavbar />
      <BiddingCard items={auctionItems} />
    </>
  );
};

export default HomePage;
