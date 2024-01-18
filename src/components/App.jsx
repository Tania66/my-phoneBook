import { lazy} from "react";
import { Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";

import { Layout } from "./Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { isRefreshing } from "../redux/auth/authSelector";
import Loader from "./Loader/Loader";



const PhoneBook = lazy(() => import("../pages/PhoneBook"));
const Contacts = lazy(() => import("../pages/Contacts"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));




export const App = () => {
  const refreshing = useSelector(isRefreshing);

  return refreshing ? (<Loader/>) :(

<Routes>
  <Route path="/" element={<Layout/>}>
 <Route index element={<PhoneBook/>}/>
   <Route path="/register"
   element={
   <RestrictedRoute redirectTo="/contacts" component={<Register/>}/>}
  />
    <Route path="/login" 
    element={
      <RestrictedRoute redirectTo="/contacts" component={<Login/>}/>}
  />

    <Route path="/contacts"
    element={<PrivateRoute redirectTo="/login" component={<Contacts/>}/>}  
    />
  </Route>
</Routes>

  );
};

