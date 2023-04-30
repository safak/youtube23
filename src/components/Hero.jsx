import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 75rem;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const Title = styled.h1`
    font-size: 3rem;
`;
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
    color: #000;
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

const Right = styled.div`
    flex: 3;
    position: relative;
`
const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to {
            transform: translateY(50px);
        }
    }
`;

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Lorem. Ipsum. Dolor.</Title>
                    <WhatWeDo>
                        <Line src="/img.line.png" />
                        <Subtitle>What we do</Subtitle>
                    </WhatWeDo>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
                    <Button>Learn more</Button>
                </Left>
                <Right>
                    {/* 3d model */}
                    <Img src="/img/3d.png" />
                </Right>
            </Container >
        </Section >
    )
}

export default Hero