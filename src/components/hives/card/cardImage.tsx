import Image from "@/components/bees/image";
import WithImageLoader from "@/components/bees/image/hoc/withImageLoader"
import React from "react";

interface CardImageProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
}
const CardImage = ({src, alt, width, height}:CardImageProps) => {
    // HOC Example
    const ImageWithLoader = WithImageLoader(Image);
    
    return (
        <ImageWithLoader src={src || ''} alt={alt || 'Card Image'} width={width || 150} height={height || 150}>
        </ImageWithLoader>
    )
}

export default CardImage;