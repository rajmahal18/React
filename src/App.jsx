import React from "react";
import Portfolio from "./components/Portfolio";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Portfolio />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}