import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Paginas/Layout";
import Home from "./Paginas/Home";
import Blogs from "./Paginas/Blogs";
import Contact from "./Paginas/Contact";
import { Products } from './Paginas/Products';
import { FeaturedProducts } from './Paginas/FeaturedProducts';
import { NewProducts } from './Paginas/NewProducts';
import NoPage from "./Paginas/NoPage";

import { Userdetails } from './Paginas/UserDetails';
import { Users } from './Paginas/Users';
import { Admin } from './Paginas/Admin';

function AppMT() {
  return (
    <div className="AppMT">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />}> 
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="new" element={<NewProducts />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route path=":userId" element={<Userdetails />} />
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppMT;
