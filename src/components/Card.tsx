import { CardProps } from '@/components/Card.types';
import Image from 'next/image';

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
        <Image src="/images/img-bottom-blue-md.png" alt="Imagem" width={100} height={100}></Image>
        {children}
      </div>
  );
}