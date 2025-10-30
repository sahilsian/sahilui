import useLoading from '@/hooks/useLoading';
import { ImageProps } from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const WithImageLoader = <IP extends ImageProps> (WrappedComponent: React.FunctionComponent<IP>): React.FunctionComponent<IP> => {
    const HOC: React.FC<IP> = (props) => {
        const {loading, startLoading, stopLoading} = useLoading();

        useEffect(() => {
            startLoading();
            if(props.src) {
                stopLoading()
            }
        }, [props.src])

        return <Container>
            {loading && <div>Loading image...</div>}
            <WrappedComponent 
                {...props}
                onLoad={(e) => {
                    props.onLoad?.(e)
                    stopLoading()
                }}
             />
        </Container>
    };
    return HOC;
};

export default WithImageLoader