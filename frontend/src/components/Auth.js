import React from "react";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authcheck } from "../redux/slices/user";
import { useNavigate } from "react-router-dom";

//check jwt and

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (isAuthenticated) {
      // User is authenticated, render child components
      return;
    }

    if (Cookies.get("token")) {
      const token = Cookies.get("token");

      try {
        console.log("caling SAAAAAAAAAAAAAGA");
        dispatch(
          authcheck({
            token: token,
          })
        );
      } catch (error) {
        console.log(error + "User not logged in");
        Cookies.remove("token");
        navigate("/login");
      }
    } else {
      Cookies.remove("token");
      navigate("/login");
    }
  }, [dispatch]);

  return <Outlet />;
}

export default Auth;
