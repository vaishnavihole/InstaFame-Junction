import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import googleFonts from 'google-fonts';
import ImgHeader from './images/HeaderImg.png';
import campagin from './images/campagin.png';
import influencer from './images/influencer.png';
import dashboard from './images/dashboard.png';
import promoting from './images/promoting.png';
import collaboration from './images/collaboration.png';
import brand from './images/brand.png';
import StarRating from '../../components/StarRating/StarRating';

googleFonts.add({
  'Open Sans': ['400', '700']
});

googleFonts.add({
  'Playfair Display': ['400', '700'],
});

function Home() {
  const [ratings, setRatings] = useState([0, 0, 0]);

  const handleRatingChange = (index, newRating) => {
    const newRatings = [...ratings];
    newRatings[index] = newRating;
    setRatings(newRatings);
  };

  return (
    <div>
      <Navbar />
      <div className="bubble-animation"></div>
      <div className='row'>
        <div className='col-md-6'>
          <div class='h-full flex justify-center items-center rounded-md overflow-hidden'>
            <img className="h-[400px] w-[400px] mt-12 drop-shadow-[0_0_4px_#66a6ff] rounded-md transition-transform duration-300 ease-in-out hover:scale-110 " src={ImgHeader} alt="Mobile View" />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='features-container'>
            <h1 class='text-3xl mt-36 text-center text-black font-bold ml-10'>Get Your Influencer <br /> Without Any Efforts</h1>
          </div>
          <div className="button-container flex flex-col sm:flex-row gap-2">
    <button className="influencer-btn py-2 px-3 mx-3 rounded-md hover:rounded-full w-full sm:w-auto sm:max-w-[calc(50%-1rem)]">I want an influencer</button>
    <button className="influencer-btn py-2 px-3 mx-3 rounded-md hover:rounded-full w-full sm:w-auto sm:max-w-[calc(50%-1rem)]">I want to be an influencer</button>
</div>



        </div>
      </div>

      <h2 className="features-heading text-4xl mt-24 mb-8 font-bold text-center">For Business Owners</h2>
      <div class='flex justify-evenly flex-wrap mt-5'>
        <div className="w-[270px] h-auto mb-6 border border-gray-300 bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <img src={influencer} alt="influncer" class="max-w-[80px] max-h-[80px] mx-auto" />
          <h3 class="text-lg mt-4 text-center font-bold">Get the Most Appropriate Influencer</h3>
          <p class="text-base text-gray-600 mt-2 text-justify">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>


        <div className="w-[270px] h-auto mb-6 border border-gray-300 bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <img src={dashboard} alt="Feature 1" class="max-w-[80px] max-h-[80px] mx-auto" />
          <h3 class="text-lg mt-4 text-center font-bold">Track Engagement on a Single Dashboard</h3>
          <p class="text-base text-gray-600 mt-2 text-justify">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>


        <div className="w-[270px] h-auto mb-6 border border-gray-300 bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <img src={campagin} alt="Feature 1" class="max-w-[80px] max-h-[80px] mx-auto" />
          <h3 class="text-lg mt-4 text-center font-bold">Campaign Management Tools</h3>
          <p class="text-base text-gray-600 mt-2 text-justify">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>
      </div>

      <h2 className="features-heading text-4xl mt-24 mb-8 font-bold text-center">For Influencers</h2>
      <div class='flex justify-evenly flex-wrap mt-5'>
        <div className="w-[270px] h-auto mb-6 border border-gray-300 bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <img src={promoting} alt="promotion" class="max-w-[80px] max-h-[80px] mx-auto" />
          <h3 class="text-lg mt-4 text-center font-bold">Earn Risk-Free by Promoting as an Influencer</h3>
          <p class="text-base text-gray-600 mt-2 text-justify">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>

        <div className="w-[270px] h-auto mb-6 border border-gray-300 bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <img src={collaboration} alt="collaboration" class="max-w-[80px] max-h-[80px] mx-auto" />
          <h3 class="text-lg mt-4 text-center font-bold">Connect and Collaborate with Multiple Businesse</h3>
          <p class="text-base text-gray-600 mt-2 text-justify">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>

        <div className="w-[270px] h-auto mb-6 border border-gray-300 bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <img src={brand} alt="brand" class="max-w-[80px] max-h-[80px] mx-auto" />
          <h3 class="text-lg mt-4 text-center font-bold">Personal Brand Growth Tools</h3>
          <p class="text-base text-gray-600 mt-2 text-justify">
            Enhancing medical care, Livin QR facilitates the submission of victims'
            medical histories to hospitals, ensuring timely and informed treatment.</p>
        </div>
      </div>


      <h2 className="features-heading text-4xl mt-24 mb-8 font-bold text-center">Customer Reviews</h2>
      <div className="flex justify-evenly flex-wrap mt-10">
        <div className="w-[300px] mb-6 relative overflow-hidden border-none bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg">
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-gray-300 bg-opacity-50 rounded-full"></div>
          <div className="flex justify-center">
            <StarRating initialRating={ratings[0]} onRatingChange={(newRating) => handleRatingChange(0, newRating)} />
          </div>
          <p className="text-base text-gray-700 mb-4 px-4 text-center">"This service has revolutionized our marketing approach. The influencers we've worked with are top-notch!"</p>
          <h4 className="text-sm text-gray-800 font-bold text-center">John Doe</h4>
        </div>
        <div className="w-[300px] mb-6 relative overflow-hidden border-none bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg">
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-gray-300 bg-opacity-50 rounded-full"></div>
          <div className="flex justify-center">
            <StarRating initialRating={ratings[1]} onRatingChange={(newRating) => handleRatingChange(1, newRating)} />
          </div>
          <p className="text-base mb-4 px-4 text-center">"Amazing platform! It has significantly boosted our brand's presence online."</p>
          <h4 className="text-sm text-gray-800 font-bold text-center">Jane Smith</h4>
        </div>
        <div className="w-[300px] mb-6 relative overflow-hidden border-none bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg">
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-gray-300 bg-opacity-50 rounded-full"></div>
          <div className="flex justify-center">
            <StarRating initialRating={ratings[2]} onRatingChange={(newRating) => handleRatingChange(2, newRating)} />
          </div>
          <p className="text-base text-gray-700 mb-4 px-4 text-center">"Highly recommend for any business looking to expand their reach!"</p>
          <h4 className="text-sm text-gray-800 font-bold text-center">Emily Johnson</h4>
        </div>
      </div>



      <Footer />
    </div>
  );
}

export default Home;
