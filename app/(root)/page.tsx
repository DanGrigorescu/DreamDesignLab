import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div hidden>
      <p>Home</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
