"use client";
import React from "react";
import { createContext, useContext } from "react";
import Modaltic from "../Modaltic";
import { IModalticContext, IModalticProvider } from "../types";
import useModalticProvider from "./useModalticProvider";

const ModalticContext = createContext({} as IModalticContext);

export function ModalticProvider({ children, ...props }: IModalticProvider) {
  const { state, show, hide } = useModalticProvider();

  return (
    <ModalticContext.Provider value={{ show, hide }}>
      <Modaltic className={state.className}state={state.state} onClose={hide} {...props}>
        {state.content}
      </Modaltic>

      {children}
    </ModalticContext.Provider>
  );
}

export function useModaltic() {
  return useContext(ModalticContext);
}
