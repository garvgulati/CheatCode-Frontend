import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SignUp from './components/sign_up';
import Home from './components/home';
import Login from './components/login';
import Layout from './Layout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route path="" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="Login" element={<Login />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
