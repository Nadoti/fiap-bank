import { ReactNode } from "react";

export type CardBackground =
    | "bg-white"
    | "bg-cyan-900"
    | "bg-gray-300";

export interface CardProps {
  background?: CardBackground;
  width?: string;
  height?: string;
  className?: string;
  children: ReactNode;
  [key: string]: any;
}
