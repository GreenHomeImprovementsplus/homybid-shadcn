import HeroComponent from "./components/HeroComponent";
import SecondaryNavbar from "@/components/navbar/SecondaryNavbar";
import OngoingBidCard from "@/components/OngoingBidCard";
import ProductCard from "@/components/ProductCard";
import ProductDetails from "@/components/ProductDetails";
import ProductImage from "@/components/ProductImage";
import { auctionItems } from "@/api/ProductData";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <HeroComponent />
      <SecondaryNavbar />
      <div className="flex flex-wrap justify-center gap-4">
        {auctionItems.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[350px] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-16px)]"
          >
            <OngoingBidCard
              initialTime={item.initialTime}
              itemName={item.itemName}
              image={item.image}
              itemId={item.itemId}
              lastBid={item.lastBid}
              bidTotal={item.bidTotal}
              lastBidder={item.lastBidder}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
