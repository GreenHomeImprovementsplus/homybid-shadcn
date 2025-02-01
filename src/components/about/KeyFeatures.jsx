import { Card, CardContent } from '@/components/ui/card';
import { Gavel, Home, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: <Gavel className='h-12 w-12 mb-4 text-black' />,
    title: 'Live Bidding',
    description:
      'Experience the thrill of real-time auctions for a dynamic buying experience',
  },
  {
    icon: <Home className='h-12 w-12 mb-4 text-black' />,
    title: 'Diverse Listings',
    description:
      'Explore a wide range of properties to suit every need and preference',
  },
  {
    icon: <Users className='h-12 w-12 mb-4 text-black' />,
    title: 'User-Friendly',
    description:
      'Navigate our intuitive interface with ease, making your journey smooth and enjoyable',
  },
  {
    icon: <Shield className='h-12 w-12 mb-4 text-black' />,
    title: 'Secure Transactions',
    description:
      'Rest easy with our advanced security measures protecting your data and transactions',
  },
];

export function KeyFeatures() {
  return (
    <section className='mb-20'>
      <h2 className='text-3xl font-semibold mb-8 text-center'>Key Features</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features.map((feature, index) => (
          <Card
            key={index}
            className='hover:shadow-lg transition-shadow duration-300 border border-gray-200'
          >
            <CardContent className='flex flex-col items-center text-center p-6'>
              {feature.icon}
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
