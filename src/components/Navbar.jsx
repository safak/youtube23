import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    Gap: 50px;
    `;
const Icons = styled.div`
    display: flex;
    align-items: center;
    Gap: 20px;`;

const Logo = styled.img`
height: 50px;
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.li`
cursor: pointer;`;

const Icon = styled.img`
width: 20px;
cursor: pointer;`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
`

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./public/img/logo.png" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./public/img/search.png" />
                    <Button>Hire now</Button>
                </Icons>

            </Container>
        </Section>
    )
}

export default Navbar