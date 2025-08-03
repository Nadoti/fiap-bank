import { ReactNode } from "react";

export interface CardProps {
  background?: string;
  width?: string;
  height?: string;
  className?: string;
  children: ReactNode;
  [key: string]: any;
}
