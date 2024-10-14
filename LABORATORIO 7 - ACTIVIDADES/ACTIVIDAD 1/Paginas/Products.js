import {Link, Outlet} from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Search products"
        />
      </div>
      <div>
        <ul>
            <li>
                <Link to="featured">Featured</Link>
            </li>
            <li>
                <Link to="new">New</Link>   
            </li>                     
        </ul>

      </div>
      <Outlet />
    </>
  );
};
