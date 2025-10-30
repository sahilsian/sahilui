import Image from '@/components/bees/image';
import WithImageLoader from '@/components/bees/image/hoc/withImageLoader';
import React from 'react'
import styled from 'styled-components'
import CardImage from './cardImage';

const Wrapper = styled.div<StyleWrapperProps>`
    width: 100%;
    max-width: ${props=>props.maxWidth ? props.maxWidth : "500px"};
    margin: auto;
`

const CardContainer = styled.div<StyleContainerProps>`
    width: 100%;
    height: 100%;
    border: 1px solid #00000010;
    padding: 16px;
    border-radius: 16px;
    background-color: ${props=>props.backgroundColor ? props.backgroundColor : "#ed9821" }
`;

const FlexContainer = styled.div`
    display: flex;
    
`

const CardImageContainer = styled.div`
`;
const CardHeaderContainer = styled.div``;

interface StyleWrapperProps {
    maxWidth?: string;
}

interface StyleContainerProps {
    maxWidth?: string;
    backgroundColor?: string;
}

interface CardProps {
    maxWidth?: string;
    backgroundColor?: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}

const Card: React.FunctionComponent<CardProps> = ({ maxWidth, backgroundColor, src, alt, width, height }) => {
    return (
        <Wrapper>
            <CardContainer 
                maxWidth={maxWidth}
                backgroundColor={backgroundColor}
            >
                <FlexContainer>
                    <CardImageContainer>
                        <CardImage src={src} alt={alt} width={width} height={height}></CardImage>
                    </CardImageContainer>
                    <CardHeaderContainer>

                    </CardHeaderContainer>
                </FlexContainer>

            </CardContainer>
        </Wrapper>
    )
}

export default Card