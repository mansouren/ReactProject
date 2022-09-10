import React from "react";
import { routes } from "../../data/routes";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Content = () => {
  return (
    <div className="content height-100 bg-light mt-5 pt-2 ps-2">
      <Routes>
        {routes.map((route) => {
          const { component: Component } = route;
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          );
        })}
        <Route to="/" index element={<Home />} />
      </Routes>
    </div>
  );
};

export default Content;
