import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes";
import { BiLike} from 'react-icons/bi';
// import { useEffect, useState } from "react";




const ViewDetails = () => {
    const viewData = useLoaderData();
    console.log(viewData);
    // const [ recipes, setRecipes] = useState([])
    

    const { chef_picture, chef_name, years_of_experience, bio, num_recipes, likes_num,  recipes } = viewData;
    // useEffect(()=>{
    //     fetch(`https://chef-recipe-hunter-server-mdshohidi763.vercel.app/data/${params.id}`)
    //     .then(res =>res.json())
    //     .then(data =>{
    //         setRecipes(data)
    //     })
    // },[])
    return (
        <div>
            
            <div className="card lg:card-side bg bg-orange-400 shadow-xl py-6 my-6">
                <figure><img className=" md:w-full" src={chef_picture} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-6xl font-bold text-gray-100">{chef_name}</h2>
                    <p className="text-2xl font-bold text-slate-700">{bio}</p>
                    <div className="md:flex md:justify-between">
                        <div>
                            <h3><span className="text-3xl font-bold ">Exparience:</span><span className="text-3xl font-bold text-gray-200">{years_of_experience}+years</span></h3>
                        </div>
                        <div className=" flex w-0 mt-3 md:w-auto">
                        <p className="text-3xl font-bold text-gray-200 "><BiLike></BiLike></p>
                            <p className="text-3xl font-bold text-gray-200">{likes_num}</p>
                        </div>
                    </div>
                    <h4 className="text-3xl font-bold ">Recipes: <span className="text-gray-200">{num_recipes}</span> </h4>
                </div>
            </div>

            {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className=" w-full" src={chef_picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div> */}


            <div className="mt-12 mb-6">
                <h2 className="text-center text-6xl font-bold  ">RECIPES</h2>
                <hr className="w-6 " />
            </div>

            {/* RECIPES ITEMS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ms-3 my-4">
                {
                    recipes?.map(recipe => <Recipes
                        recipe={recipe}
                    ></Recipes>)
                }
            </div>

        </div>
    );
};

export default ViewDetails;