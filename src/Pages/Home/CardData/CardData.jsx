import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

// import { FaLike ,FaHtml5} from 'react-icons/fa';



const CardData = ({ loader }) => {
    const { id, chef_picture, chef_name, years_of_experience, likes_num ,rating} = loader;
    const data = useLoaderData()
    console.log(data);
    return (


        <div className="card w-96  shadow-xl  bg bg-orange-400">
            <figure className="px-10 pt-10">
                <img src={chef_picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title text-4xl font-semibold text-gray-200">{chef_name}</h2>
                <p><span className='text-2xl font-semibold'>Experience:</span> <span className='text-2xl font-semibold text-gray-200'>{years_of_experience} Years</span></p>
             <div className='flex w-0'>
             <p className="text-3xl font-bold text-gray-200 "><BiLike></BiLike></p>
                <p className='text-2xl font-bold text-gray-300 '>{likes_num}</p>
             </div>
             <div>
                <h1>{rating}</h1>
             </div>
                <div className="card-actions py-3 ">
                    <Link to={`/recipe/${id}`} ><button className="btn btn-outline btn-block">view RECIPE</button></Link>
                    {/* <button className="btn btn-outline btn-block">view RECIPE</button> */}
                </div>
            </div>
        </div>

    );
};

export default CardData;