import Pool from '../assets/pool.png';
const ProductDetails = () => {
  return (
    <>
      <p className='text-4xl font-bold'>$25k Swimming Pool </p>
      <p>
        20 x 40 Custom Fiberglass Pool with Premium Features, New Installation
        Included
      </p>
      <div className='flex gap-2 mt-2'>
        <div className='w-2/3'>
          <img
            src={Pool}
            alt='Large Image'
            className='w-full h-full object-cover rounded'
          />
        </div>
        <div className='w-1/3 grid grid-cols-2 grid-rows-2 gap-2'>
          <img
            src='https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o'
            alt='Small Image 1'
            className='w-full h-full object-cover rounded'
          />
          <img
            src='https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY'
            alt='Small Image 2'
            className='w-full h-full object-cover rounded'
          />
          <img
            src='https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4'
            alt='Small Image 3'
            className='w-full h-full object-cover rounded'
          />
          <img
            src='https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE'
            alt='Small Image 4'
            className='w-full h-full object-cover rounded'
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
