import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import '@smastrom/react-rating/style.css'
import Rating from 'react-rating';

const Recipes = ({ recipe }) => {
    const { name, img, method, rating, ingredients } = recipe;

    const handleToast = () => {
        toast.success('Successfully Added', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (


        <div className="card w-96 glass bg bg-orange-400 ">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl text-blue-500">{name}</h2>
                <div className='flex justify-around'>
                    <div>
                        <h2 className='text-2xl font-bold mx-6'>Ingredients</h2>
                        <ol>
                            {
                                ingredients.map(ingredient => <li>{ingredient}</li>)
                            }
                        </ol>

                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>Method</h2>
                        <ol>
                            {
                                method.map(me => <li>{me}</li>)
                            }
                        </ol>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex mr-3'>
                    <div>
                    <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div>
                        <p className='text-2xl'>{rating}</p>
                    </div>
                    </div>
                    <div className="card-actions">
                        <ToastContainer />
                        <button onClick={handleToast} className="btn btn-secondary">Add to Favorite</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Recipes;