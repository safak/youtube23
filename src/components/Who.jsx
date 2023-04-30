import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 75rem;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;

`
const Title = styled.h1`
    font-size: 3rem;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Line = styled.img`
height: 5px;
`;

const Subtitle = styled.h3`
    color: #da4ea2;
`;
const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
`

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                </Left>
                <Right>
                    <Title>think outside the box.</Title>
                    <WhatWeDo>
                        <Line src="/img.line.png" />
                        <Subtitle>Who we are</Subtitle>
                    </WhatWeDo>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
                    <Button>Zie werken</Button>
                </Right>
            </Container >
        </Section >
    )
}

export default Who