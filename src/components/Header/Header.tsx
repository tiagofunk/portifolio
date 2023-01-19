import {
    Container, Icon,
  } from "./Header.style";

  import foto from "../../assets/img/Header/foto_tiago.jpg"
  
  export const Header = () => {
    
    return (
      <Container>
        <Icon src={foto}/>
      </Container>
    );
  };
  