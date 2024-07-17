import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-12 gap-4'>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl col-span-9">Tasty bites. Great vibes.</h1>
        <dl className="grid grid-rows-2 text-xl p-4 col-span-3">
          <dt className="font-semibold">Breakfast</dt>
          <dd>7am - 12pm</dd>
          <dt className="font-semibold">Lunch & Dinner</dt>
          <dd>12pm - 10pm</dd>
        </dl>
      </div>
      <iframe
        width="1000"
        height="238"
        className="rounded-md"
        style={{border:0}}
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJWTIOMwKQmYARUn_tZLeBVqs&key=AIzaSyCFjGP_Zh3ux1ruhoQHfZTyktu_m10YgnA"
      />
      <p className="mt-6 text-lg leading-8 text-gray-600 pb-10">
        Experience a diverse range of flavors at Elements Eatery and Bar. 
        Our enthusiastic local team is committed to providing an enjoyable atmosphere, 
        delicious drinks, and tons of fun. Relish the scenic beauty of the lake as you 
        savor our handmade tortillas or  unwind at the bar with expertly crafted beverages
        and chilled beers. Always expect warm hospitality, breathtaking views, and a 
        welcoming dining and lounge area. We can&apos;t wait to see you soon!
      </p>
      <div className="flex justify-center items-center pb-4">
        <InstagramFeed accessToken='IGQWRQRXh1aG1TOGZArQUpYRnFGVU5aT3EweW51M2xZAQXI1dWZAZAYi1adkl6T0h3aWZAyYVR4a0ljYVF4MlhXRUE2ellOOWMxNkp5d0NjWkVVb3RRc0phTVN0TXdOMF94UzJZAWlNDbzExUUNUUQZDZD' />
      </div>
    </>
  );
}
