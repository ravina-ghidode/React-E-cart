import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data.tsx";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ setData, cart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };
  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <header className="sticky-top">
        <nav className="navbar bg-primary">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              E-Commerce
            </Link>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
            <Link to={"/cart"} className="navbar-brand">
              <button
                type="button"
                className="btn btn-warning position-relative"
              >
                <FaCartArrowDown style={{ fontSize: "1.5rem" }} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>
        </nav>
        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div className="items" onClick={() => setData(items)}>
              No Filter
            </div>
            <div className="items" onClick={() => filterByCategory("mobiles")}>
              Mobiles
            </div>
            <div className="items" onClick={() => filterByCategory("laptops")}>
              Laptops
            </div>
            <div className="items" onClick={() => filterByCategory("tablets")}>
              Tablets
            </div>
            <div className="items" onClick={() => filterByPrice(29999)}>
              {">="}29999
            </div>
            <div className="items" onClick={() => filterByPrice(49999)}>
              {">="}49999
            </div>
            <div className="items" onClick={() => filterByPrice(69999)}>
              {">="}69999
            </div>
            <div className="items" onClick={() => filterByPrice(89999)}>
              {">="}89999
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
