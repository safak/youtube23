import styled from 'styled-components';
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Who from "./Components/Who"
import Works from "./Components/Works"


const Container = styled.div`
  height: 100vh;
  background-color: red;

`
const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: red;

`


function App() {

  return (
    <Container>
      <Hero/>
      <Works/>
      <Who/>
      <Contact/>
      <Button/>
    </Container>
  )
}



export default App
