import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

export default function Homepage() {
  const { username, isAuthenticated } = useSelector((state) => state.user);
  return (
    <div>
      <Header />

      <p> {username}</p>
      <p> {isAuthenticated}</p>
    </div>
  );
}
