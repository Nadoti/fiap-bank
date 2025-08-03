import { CardProps } from '@/components/Card.types';

export default function Card({
  background = "bg-white",
  width = "w-full",
  height = "",
  padding = "",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
      <div
          className={`rounded-lg ${padding} ${background} ${width} ${height} ${className}`}
          {...props}
      >
        {children}
      </div>
  );
}