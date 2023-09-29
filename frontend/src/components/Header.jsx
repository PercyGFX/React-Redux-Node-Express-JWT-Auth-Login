import React from "react";
import { Card } from "antd";

function Header() {
  return (
    <div className="flex flex-row justify-center m-5">
      <Card className="flex">
        <button className="bg-emerald-500 font-poppins py-2 px-3 rounded-sm font-semibold mx-2 text-white hover:bg-emerald-400">
          HOME
        </button>

        <button className="bg-emerald-500 font-poppins py-2 px-3 rounded-sm font-semibold mx-2  text-white hover:bg-emerald-400">
          PROFILE
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
