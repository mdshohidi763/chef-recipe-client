import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import ViewDetails from "../Pages/Veiw/ViewDetails";
import PrivateRoutes from "./Private/PrivateRoutes";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
       
      },
      {
        path: '/blog',
        element: <Blog></Blog>,

      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: 'recipe/:id',
        element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader:({params}) => fetch(`https://chef-recipe-hunter-server-mdshohidi763.vercel.app/data/${params.id}`)
      
      }
    ]
  },
]);
export default router;