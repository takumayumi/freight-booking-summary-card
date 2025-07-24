"use client";

import { Slide, ToastContainer } from "react-toastify";
import SummaryCard from "@/components/SummaryCard";

export default function Home() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
      <main className="container flex flex-1 items-center justify-center">
        <SummaryCard />
      </main>
    </>
  );
}
