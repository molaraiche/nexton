"use client";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImgHandler = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <Image src={src} alt={alt} width={640} height={678} />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ImgHandler;
