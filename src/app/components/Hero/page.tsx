
const Hero  = () => {
  return (
<div className='flex flex-wrap justify-center'>
  <div className='p-3'>
    <div className='lg:p-4 md:w-full flex mt-20'>
      <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg flex flex-col h-full'>
        <img src="/images/img1.jpg" className="w-full h-96 object-cover" alt="Chocolate Cake" />
        <div className='px-6 py-4 flex-grow'>
          <div className='title-font text-lg font-medium mb-2'>
            <a href="#" className='no-underline text-yellow-700'>
              Chocolate Cake
            </a>
          </div>
          <p className='text-yellow-800 text-base'>
            "A rich and decadent chocolate cake that boasts a moist texture and intense chocolate flavor,this classic dessert is a crowd-pleaser for any celebration or just a sweet indulgence."
          </p>
        </div>
        {/* button*/}
        <div className='px-6 pt-4 pb-2 mt-2'>
          <span className='inline-block bg-yellow-600 text-yellow-800 px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-yellow-200 transition ease-in-out delay-150 bg-pink-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600/60'>
            Add to cart
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* card 2 */}
  <div className='p-3'>
    <div className='lg:p-4 md:w-full flex mt-20'>
      <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg flex flex-col h-full'>
        <img src="/images/img2.jpg" className="w-full h-96 object-cover" alt="Fruit Pavlova" />
        <div className='px-6 py-4 flex-grow'>
          <div className='title-font text-lg font-medium mb-2'>
            <a href="#" className='no-underline text-yellow-700'>
            Fruit Pavlova
            </a>
          </div>
          <p className='text-yellow-800 text-base'>
            " A stunning dessert featuring a crisp meringue shell that is light and airy, topped with a cloud of fresh whipped cream and an array of colorful seasonal fruits."
          </p>
        </div>
        {/* button */}
        <div className='px-6 pt-4 pb-2 '>
          <span className='inline-block bg-yellow-600 text-yellow-800 px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-yellow-200 transition ease-in-out delay-150 bg-pink-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600/60'>
            Add to cart
          </span>
        </div>
      </div>
    </div>
  </div>
   {/* card 3 */}
  <div className='p-3'>
    <div className='lg:p-4 md:w-full flex mt-20'>
      <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg flex flex-col h-full'>
        <img src="/images/img5.jpg" className="w-full h-96 object-cover" alt="Chocolate Cream Pie" />
        <div className='px-6 py-4 flex-grow'>
          <div className='title-font text-lg font-medium mb-2'>
            <a href="#" className='no-underline text-yellow-700'>
            Chocolate Cream Pie
            </a>
          </div>
          <p className='text-yellow-800 text-base'>
            "A luscious dessert featuring a rich, velvety chocolate filling nestled in a buttery, flaky crust. Topped with a generous layer of whipped cream and drizzled with chocolate ganache."
          </p>
        </div>
        {/* button */}
        <div className='px-6 pt-4 pb-2 mt-2'>
          <span className='inline-block bg-yellow-600 text-yellow-800 px-4 py-2 text-sm font-semibold mr-2 mb-3 cursor-pointer tracking-widest rounded-full hover:bg-yellow-200 transition ease-in-out delay-150 bg-pink-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600/60'>
            Add to cart
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Hero;

