import React from 'react'
import IMAGE from "../../images/Home3-image.webp";


export default function About() {

    return (

        <div className="py-8">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">

                    <div className="md:5/12 lg:w-5/12">

                        <img src={IMAGE} className="w-80 cursor-pointer" alt="image"/>

                    </div>

                    <div className="md:7/12 lg:w-6/12">
                        <p className="text-xl mb-4 text-gray-900 font-bold uppercase">
                            Welcome to my resturant
                        </p>
                        <p className="text-gray-600 text-start">
                            My Restaurant showcases inventive Indian cuisine by complementing the flavours and traditions of India with global ingredients and techniques.
                            <br />
                            <br />
                            My Restaurant has won numerous awards and honours from diners and critics across the world. It was voted the No. 1 Restaurant in India and has been on Asia's 50 Best Restaurants list, currently ranked #15.
                            It has also been recognized amongst the 'World's 100 Greatest Places'.
                        </p>
                        
                        <p className=" text-gray-900 my-4 text-xl font-bold uppercase">
                            Private Dining
                        </p>
                        <p className=" text-gray-600 text-start">
                            Make your next celebration memorable with an Indian Accent experience.
                            <br />
                            <br />
                            Our 2 private dining spaces are ideal for small get-togethers from 10-40 guests and perfect for private parties, company lunches or dinners, corporate milestone celebrations, and more.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
