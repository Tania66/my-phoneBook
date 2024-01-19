import { lazy, useEffect} from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { isRefreshing } from "../redux/auth/authSelector";
import Loader from "./Loader/Loader";
import { refreshCurrentUser } from "../redux/auth/authOperation";
import { Layout } from "./Layout/Layout";



const PhoneBook = lazy(() => import("../pages/PhoneBook"));
const Contacts = lazy(() => import("../pages/Contacts"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));




export const App = () => {
  const refreshing = useSelector(isRefreshing);
  const dispatch = useDispatch();


useEffect(()=>{
  dispatch(refreshCurrentUser())
},[dispatch]);

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

