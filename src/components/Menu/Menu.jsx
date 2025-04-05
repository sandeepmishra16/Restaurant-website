import React from 'react'
import Paneer from "../../images/paneer.jpg";
import dal_makhani from "../../images/Dal-Makhani.jpg";
import Chola from "../../images/chole.jpg";
import Aloo_Paratha from "../../images/Aloo_Paratha.jpg";
import North_Thali from "../../images/north-thali.jpg";
import Dosa from "../../images/dosa.jpg";
import Idli from "../../images/idli.jpg";
import South_Thali from "../../images/south-thali.webp";
import Bihari from "../../images/litti-chokha.jpg";
import Kheer from "../../images/kheer.webp";
import Kaju_Katli from "../../images/kaju-katli1.jpg";
import Gulab_Jamun from "../../images/gulab-jamun.jpg";


export default function Menu() {
  return ( 

    <div className="py-8">
        <div className='flex flex-wrap gap-8 justify-center'>

            <div className='h-auto w-1/4 p-3 shadow-md z-50'>
                <div>
                    <img src={Paneer} alt="" className=" h-64 w-full cursor-pointer" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Paneer</p>
                    <p className='font-semibold'>Price: 399</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Enjoy our   Paneer Sabji, a flavorful blend of soft paneer in rich, spiced gravy. Perfect with naan or rice.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={dal_makhani} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Dal Makhani</p>
                    <p className='font-semibold'>Price: 349</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Authentic, slow-cooked Dal Makhani with rich spices, creamy texture, and homemade goodness. Perfect with naan or rice.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={Chola} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Chole Bhature</p>
                    <p className='font-semibold'>Price: 199</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Delicious, spicy chole with fluffy bhature-authentic, flavorful, and satisfying. A perfect feast for every craving.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={Dosa} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Masala Dosa</p>
                    <p className='font-semibold'>Price: 199</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Crispy dosa filled with spiced potato masala. Served with chutneys and sambar for a perfect meal.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={Idli} alt="" className="h-64 w-full cursor-pointer" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Idli Sambhar</p>
                    <p className='font-semibold'>Price: 299</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Soft, fluffy idlis served with flavorful, aromatic sambar.Perfect for a light and delicious meal.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={South_Thali} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>South Thali</p>
                    <p className='font-semibold'>Price: 499</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        A flavorful South Indian feast with a variety of traditional delicacies, rich spices, and authentic tastes.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={Aloo_Paratha} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Aloo Paratha</p>
                    <p className='font-semibold'>Price: 199</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Golden, crispy aloo paratha stuffed with spiced potatoes, offering a flavorful and satisfying bite.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={Bihari} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Litti Chokha</p>
                    <p className='font-semibold'>Price: 349</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Authentic litti chokha with smoky flavors and rich spices, offering a traditional taste of Bihar.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={North_Thali} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>North Thali</p>
                    <p className='font-semibold'>Price: 599</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        A flavorful North Indian feast with traditional recipes, and authentic tastes, offering a wholesome dining experience.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={Gulab_Jamun} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Gulab Jamun</p>
                    <p className='font-semibold'>Price: 299</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Soft gulab jamun soaked in sweet, aromatic syrup-an irresistible Indian dessert for every celebration and craving.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={Kheer} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Kheer</p>
                    <p className='font-semibold'>Price: 499</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Creamy, aromatic kheer made with rich ingredients and slow-cooked to perfection-a delightful Indian dessert.
                    </p>
                </div>
            </div>

            <div className='h-auto w-1/4 p-3 shadow-md z-50 top-0'>
                <div>
                    <img src={Kaju_Katli} alt="" className="h-64 w-full" />
                </div>
                <div className=' text-start'>
                    <p className='text-xl font-bold uppercase'>Kaju Katli</p>
                    <p className='font-semibold'>Price: 599</p>
                    <p className='text-normal text-sm sm:text-md font-medium text-gray-600'>
                        Delicate kaju katli made with premium cashews and rich flavors-perfect for celebrations and sweet indulgence.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
