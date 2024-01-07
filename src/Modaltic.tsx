"use client";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "react-hook-bag";
import { IModalticProps } from "./types";

export default function Modaltic({
  className,
  state,
  onClose,
  children,
  ...props
}: IModalticProps) {
  const modalticRef = useRef<HTMLDivElement>(null);

  useOutsideClick([modalticRef], state, onClose);

  return (
    <AnimatePresence>
      {state && (
        <motion.div
          className={`modaltic${props.theme === "dark" ? "" : " modaltic-light"}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className={`modaltic-container${props.containerPadding ? " modaltic-pad" : ""} ${className}`} style={props.containerStyle} ref={modalticRef}>
            {props.showButton && (<button className="modaltic-btn" onClick={onClose}><span></span><span></span></button>)}

            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
