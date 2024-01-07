"use client";
import React, { useState } from "react";
import { IModalticState } from "../types";

export default function useModalticProvider() {
  const [state, setState] = useState<IModalticState>({
    state: false,
    className: "",
    content: <></>,
  });

  const show = (className: string, content: JSX.Element) => {
    setState({
      state: true,
      className,
      content,
    });
  };
  const hide = () => {
    setState({
      state: false,
      className: "",
      content: <></>,
    });
  };

  return { state, show, hide };
}
