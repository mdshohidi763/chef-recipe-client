import React from 'react';
import img1 from '../../../assets/Gallary/img1.jpg'
import img2 from '../../../assets/Gallary/img2.jpg'
import img3 from '../../../assets/Gallary/img3.jpg'
import img4 from '../../../assets/Gallary/img4.jpg'
import img5 from '../../../assets/Gallary/img5.jpg'
import img6 from '../../../assets/Gallary/img6.jpg'
const Galary = () => {
    return (
       
        <div>
            <h1 className='text-center text-5xl font-semibold my-12 '>OUR GALLERY</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 mx-auto my-6">
                
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img1} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img4} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img5} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img6} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Galary;