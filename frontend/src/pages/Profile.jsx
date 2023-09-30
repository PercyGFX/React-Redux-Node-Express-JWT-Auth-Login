import React from "react";
import Header from "../components/Header";
import { Card } from "antd";

function Profile() {
  return (
    <div>
      <Header />
      <div className="flex flex-row justify-center">
        <Card className=" w-1/4">
          <p className=" font-poppins">
            This is a authenticated route. Non authenticated users can't access
            this page
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
