import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/pages/Main";
import Teams from "./components/pages/Teams";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>, 

  },
  {
    path: "/teams",
    element: <Teams/>, 

  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
