import React from 'react';
import Pool from '../assets/pool.png';
import ProductDetails from './ProductDetails';
const ProductImage = () => {
  const images = [Pool, Pool, Pool, Pool, Pool];

  return (
    <>
      <div className='w-full max-w-7xl mx-auto mb-8'>
        <div className='flex flex-col md:flex-row h-[600px] gap-4'>
          <div className='w-full md:w-2/3 h-full'>
            <img
              src={images[0] || '/placeholder.svg'}
              alt='Large product image'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='w-full md:w-1/3 h-full grid grid-cols-2 gap-4'>
            {images.slice(1).map((src, index) => (
              <div key={index} className='relative'>
                <img
                  src={src || '/placeholder.svg'}
                  alt={`Small product image ${index + 1}`}
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductDetails />
    </>
  );
};
export default ProductImage;
