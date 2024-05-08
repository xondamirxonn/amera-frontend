"use client"
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

interface Props {
  children: React.ReactNode;
}

export const Reduxprovider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
