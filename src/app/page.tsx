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
      <div className="flex justify-center items-center pb-4">
        <InstagramFeed accessToken='IGQWRPTTA5U2NvbUV2b3kxaWhpS29wd0tfSWNMck44b25HR3didUtmVGl6aGhhS0NHS0owbGJyb2k4X3J1c0dIRnRVNFNtckZAQN0J3cVZALMjRXNUpuSkRMbFpiNmloMnZAFYTU3aDFHdm93QQZDZD' />
      </div>
      <p className="mt-6 text-lg leading-8 text-gray-600 pb-10">
        Experience a diverse range of flavors at Elements Eatery and Bar. 
        Our enthusiastic local team is committed to providing an enjoyable atmosphere, 
        delicious drinks, and tons of fun. Relish the scenic beauty of the lake as you 
        savor our handmade tortillas or  unwind at the bar with expertly crafted beverages
        and chilled beers. Always expect warm hospitality, breathtaking views, and a 
        welcoming dining and lounge area. We can't wait to see you soon!
      </p>
      <iframe
        width="1000"
        height="238"
        style={{border:0}}
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJWTIOMwKQmYARUn_tZLeBVqs&key=AIzaSyCFjGP_Zh3ux1ruhoQHfZTyktu_m10YgnA"
      />

    </>
    
  );
}
