
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";


const PhoneBook = lazy(() => import("../pages/PhoneBook"));
const Contacts = lazy(() => import("../pages/Contacts"));

export const App = () => {
  return (
    <div>
<Routes>
<Route path="/" element={<AppBar/>}>
  <Route index  element={<PhoneBook/>}/>
  <Route path="/contacts"  element={<Contacts/>}/>
  </Route>
</Routes>
    </div>
  );
};


