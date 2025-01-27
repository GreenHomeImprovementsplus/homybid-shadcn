import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';

const ProductDetails = () => {
  return (
    <div className='flex flex-row'>
      <div className='w-2/3'>
        <div className='w-full mx-auto'>
          <div className='border border-gray-400 bg-white p-4 rounded-lg shadow mb-4 flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <Clock className='h-5 w-5 text-gray-500' />
              <p className='text-md'>00:56:00</p>
              <div className='flex items-center space-x-2'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage
                    src='https://fastly.picsum.photos/id/124/3504/2336.jpg?hmac=B1Avp6or9Df8vpnN4kQsGNfD66j8hH3gLtootCoTw4M'
                    alt='Bob'
                  />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <span className='text-sm font-medium'>Bob bid $50</span>
              </div>
              <span className='text-sm text-gray-500'>10mins ago</span>
            </div>
            <div className='flex space-x-2'>
              <Button variant='outline' className='border-black rounded'>
                Buy Now $12,500
              </Button>
              <Button variant='outline' className='bg-black text-white rounded'>
                Bid Now
              </Button>
            </div>
          </div>

          <Tabs defaultValue='item-details' className='w-full'>
            <TabsList className='grid w-full grid-cols-3 h-12 bg-gray-200 rounded-lg p-1'>
              <TabsTrigger
                value='item-details'
                className='rounded-md transition-all duration-200 hover:bg-white data-[state=active]:bg-white data-[state=active]:shadow'
              >
                Item Details
              </TabsTrigger>
              <TabsTrigger
                value='features'
                className='rounded-md transition-all duration-200 hover:bg-white data-[state=active]:bg-white data-[state=active]:shadow'
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value='installation'
                className='rounded-md transition-all duration-200 hover:bg-white data-[state=active]:bg-white data-[state=active]:shadow'
              >
                Installation
              </TabsTrigger>
            </TabsList>
            <TabsContent value='item-details'>
              <ItemDetails />
            </TabsContent>
            <TabsContent value='features'>
              <Features />
            </TabsContent>
            <TabsContent value='installation'>
              <Installation />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className='w-1/3'></div>
    </div>
  );
};

function ItemDetails() {
  return (
    <div className='grid grid-cols-2 gap-4 p-6 bg-white rounded-lg shadow mt-4'>
      <div className='flex justify-between'>
        <span className='font-semibold'>Dimensions:</span>
        <span>20 x 40 (800 sq ft)</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-semibold'>Depth:</span>
        <span>3' to 8' gradient</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-semibold'>Material:</span>
        <span>Premium Fiberglass</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-semibold'>Finish:</span>
        <span>Crystal Blue Gel Coat</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-semibold'>Shape:</span>
        <span>Rectangle with Roman ends</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-semibold'>Volume:</span>
        <span>25,000 gallons</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-semibold'>Warranty:</span>
        <span>25 Year Structure</span>
      </div>
      <div className='flex justify-between'>
        <span className='font-semibold'>Installation:</span>
        <span>Included (Select Regions)</span>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className='p-6 bg-white rounded-lg shadow mt-4'>
      <h3 className='text-lg font-semibold mb-4'>Product Features</h3>
      <ul className='list-disc pl-5 space-y-2'>
        <li>Durable Premium Fiberglass construction</li>
        <li>Crystal Blue Gel Coat finish for a luxurious look</li>
        <li>Spacious design with 800 sq ft surface area</li>
        <li>Variable depth from 3' to 8' for diverse usage</li>
        <li>25-year structural warranty for peace of mind</li>
      </ul>
    </div>
  );
}

function Installation() {
  return (
    <div className='p-6 bg-white rounded-lg shadow mt-4'>
      <h3 className='text-lg font-semibold mb-4'>Installation Information</h3>
      <p className='mb-4'>
        Installation is included for select regions. Please contact our customer
        service for detailed information about installation in your area.
      </p>
      <p>
        Our professional team ensures a smooth and efficient installation
        process, typically completed within 2-4 weeks, depending on your
        location and specific site conditions.
      </p>
    </div>
  );
}

export default ProductDetails;
