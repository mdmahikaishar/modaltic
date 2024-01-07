import { CSSProperties, ReactNode } from "react";

type Theme = "dark" | "light";

export interface IStyling {
  /**
   * Theme of the modal
   * 
   * Default theme is `dark`. You can swith it to `light`.
   */
  theme?: Theme;
  /**
   * Show Button
   * 
   * Give you a button on the modal.
   */
  showButton?: boolean;
  /**
   * Give you padding inside the modal.
   */
  containerPadding?: boolean;
  /**
   * styling for modal.
   */
  containerStyle?: CSSProperties;
}

export interface IModalticProvider extends IStyling {
  children: ReactNode;
}

export interface IModalticState {
  state: boolean;
  content: JSX.Element;
  className: string;
}
export interface IModalticContext {
  show: (className: string, content: JSX.Element) => void;
  hide: () => void;
}

export interface IModalticProps extends IStyling {
  state: boolean;
  className?: string;
  children?: ReactNode;
  onClose: () => void;
}
