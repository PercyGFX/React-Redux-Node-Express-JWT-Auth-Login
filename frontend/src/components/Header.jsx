import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row justify-center m-5">
      <Card className="flex">
        <button className="bg-emerald-500 font-poppins py-2 px-3 rounded-sm font-semibold mx-2 text-white hover:bg-emerald-400">
          <Link to="/">HOME</Link>
        </button>

        <button className="bg-emerald-500 font-poppins py-2 px-3 rounded-sm font-semibold mx-2  text-white hover:bg-emerald-400">
          <Link to="/profile">PROFILE</Link>
        </button>

        <button className="bg-emerald-500 font-poppins py-2 px-3 rounded-sm font-semibold mx-2  text-white hover:bg-emerald-400">
          POSTS
        </button>

        <button className="bg-emerald-500 font-poppins py-2 px-3 rounded-sm font-semibold mx-2  text-white hover:bg-emerald-400">
          PUBLIC ROUTE
        </button>
      </Card>
    </div>
  );
}

export default Header;
