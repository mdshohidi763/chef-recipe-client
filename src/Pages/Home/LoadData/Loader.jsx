import React, { useEffect, useState } from 'react';
import CardData from '../CardData/CardData';

const Loader = () => {

    const [loaders, setLoaders] = useState([]);
    console.log(loaders)
    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-mdshohidi763.vercel.app/data')
            .then(res => res.json())
            .then(data => {
                setLoaders(data);
            })
    }, [])
    return (
        <div>
            <h1 className='text-center text-5xl font-semibold my-8 '>OUR TOP CHEFS</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3  md:ms-16'>

                {
                    loaders?.map(loader => <CardData key={loader.id} loader={loader} ></CardData>)
                }
            </div>

        </div>
    );
};

export default Loader;