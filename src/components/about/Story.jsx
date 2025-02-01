export function Story() {
  return (
    <section className='mb-20'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div className='md:w-1/2'>
          <h2 className='text-3xl font-semibold mb-4'>Our Story</h2>
          <p className='text-lg mb-4 text-gray-700 leading-relaxed'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className='text-lg text-gray-700 leading-relaxed'>
            By leveraging cutting-edge technology and a user-centric approach,
            we've created a space where buyers can find their dream homes and
            sellers can reach a wider audience, all through an engaging bidding
            process.
          </p>
        </div>
        <div className='md:w-1/2'>
          <img
            src='/placeholder.svg'
            alt='HomyBid Team'
            width={500}
            height={300}
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  );
}
