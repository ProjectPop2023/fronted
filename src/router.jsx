import {
    createBrowserRouter,
} from "react-router-dom";
import Example, {exampleLoader} from './pages/example'

import Home from './pages/home'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: exampleLoader,
    },
    {
      path: "/example",
      element: <Example />,
      loader: exampleLoader,
    },
]);

export default router