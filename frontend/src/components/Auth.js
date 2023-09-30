import React from "react";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/slices/user";
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
        axios
          .get("http://localhost:5000/isauthenticated", {
            headers: {
              Authorization: `${token}`,
            },
          })
          .then((response) => {
            console.log(response.data);

            dispatch(
              login({
                username: response.data.username,
                isAuthenticated: response.data.success,
              })
            );
          })
          .catch((error) => {
            console.error("Error:", error);
            navigate("/login");
          });
      } catch (error) {
        console.log(error + "User not logged in");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, dispatch]);

  return <Outlet />;
}

export default Auth;
