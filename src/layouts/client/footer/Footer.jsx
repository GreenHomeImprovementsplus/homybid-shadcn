import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-100 text-gray-800'>
      {/* Upper Footer */}
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Why Homybid?</h3>
            <div className='space-y-4'>
              <div>
                <p className='text-2xl font-bold'>180k+</p>
                <p className='text-sm'>Properties listed</p>
              </div>
              <div>
                <p className='text-2xl font-bold'>95%+</p>
                <p className='text-sm'>Success rate</p>
              </div>
            </div>
          </div>

          {/* Our Customers love us */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>
              Our Customers love us
            </h3>
            <div className='flex items-center mb-2'>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className='w-5 h-5 text-yellow-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
            <p className='font-semibold'>Sarah M.</p>
            <p className='text-sm text-gray-600 mb-2'>June 15, 2023</p>
            <p className='text-sm'>
              "Excellent service! Homybid made selling my property a breeze."
            </p>
          </div>

          {/* Get the Daily Email */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Get the Daily Email</h3>
            <Input
              type='email'
              placeholder='Enter your email'
              className='mb-2'
            />
            <Button className='w-full'>Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className='bg-gray-200 py-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
              <h4 className='font-semibold mb-4'>HOW IT WORKS</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link href='#' className='hover:underline'>
                    Safe Bid
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Buying a Home
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Selling a Home
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Finalizing the Sale
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>SELLERS</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link href='#' className='hover:underline'>
                    Submit Your Property
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Photography Guide
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Inspections
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Premium Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>HELPFUL LINKS</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link href='#' className='hover:underline'>
                    Browse
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Community
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Support
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Financing
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:underline'>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>FOLLOW US</h4>
              <div className='flex space-x-4'>
                <Link href='#' className='text-gray-600 hover:text-gray-800'>
                  <Youtube size={24} />
                </Link>
                <Link href='#' className='text-gray-600 hover:text-gray-800'>
                  <Instagram size={24} />
                </Link>
                <Link href='#' className='text-gray-600 hover:text-gray-800'>
                  <Twitter size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-col md:flex-row justify-between items-center text-sm'>
          <div className='mb-2 md:mb-0'>
            © Copyright {currentYear} Homybid LLC
          </div>
          <div className='flex space-x-4'>
            <a href='#' className='hover:underline'>
              Terms of Use
            </a>
            <a href='#' className='hover:underline'>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
