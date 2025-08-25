"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable={false}
      theme="dark"
      hideProgressBar={false}
    />
  );
}
