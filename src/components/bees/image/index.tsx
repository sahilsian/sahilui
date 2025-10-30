import React, { useState } from 'react'
import NextImage from 'next/image';
import { ImageProps } from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div``;

//styled-component wrapper next/image injection <3
const ImageStyle = styled(NextImage).attrs<ImageProps>(props => ({
    ...props,
}))`
    object-fit: cover;
    border-radius: 16px;
`

interface ImageComponentProps {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
    width?: number;
    height?: number;
    style?: React.CSSProperties;
}

const Image: React.FunctionComponent<ImageComponentProps> = ({ src, alt, width, height, style }) => {

    const [image, setImage] = useState(src)
    
    return (
        <Wrapper>
            <ImageStyle
                src={image} 
                alt={alt} 
                width={width} 
                height={height} 
                style={style}
            />
        </Wrapper>
    )
}

export default Image