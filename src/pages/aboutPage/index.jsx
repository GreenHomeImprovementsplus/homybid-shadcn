import { KeyFeatures } from '@/components/about/KeyFeatures';
import { Mission } from '@/components/about/Mission';
import { Story } from '@/components/about/Story';
import { Team } from '@/components/about/Team';

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-white text-black'>
      <main className='container mx-auto px-4 py-12'>
        <h1 className='text-4xl font-bold mb-8 text-center'>About HomyBid</h1>
        <Story />
        <Mission />
        <KeyFeatures />
        <Team />
        {/* <CallToAction /> */}
      </main>
    </div>
  );
};
export default AboutPage;
