import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, About, Landing, Error, SinglePageError, Newsletter, Cocktail } from './pages';
import './index.css';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
       {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],  
  },  
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
