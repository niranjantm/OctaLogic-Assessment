import User from "./pages/User";
import NavBar from "./components/NavBar";
import PrivatePages from "./components/PrivatePages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VehicleForm1 from "./pages/VehicleForm1";
import VehicleForm2 from "./pages/VehicleForm2";
import VehicleForm3 from "./pages/VehicleForm3";
import VehicleForm4 from "./pages/VehicleForm4";
import Display from "./pages/Display";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar></NavBar>,
      children: [
        { index: true, element: <User></User> },
        { element: <PrivatePages></PrivatePages>,children:[
          {path:"/vf1",element:<VehicleForm1></VehicleForm1>},
          {path:"/vf2",element:<VehicleForm2></VehicleForm2>},
          {path:"/vf3",element:<VehicleForm3></VehicleForm3>},
          {path:"/vf4",element:<VehicleForm4></VehicleForm4>},
          {path:"/display",element:<Display></Display>}
        ] },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
