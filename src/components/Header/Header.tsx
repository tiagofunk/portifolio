import {
    Container, Icon, Image,
  } from "./Header.style";

  import background from "../../assets/img/Header/background.jpg"
  import foto from "../../assets/img/Header/foto_tiago.jpg"
  
  export const Header = () => {
    
    return (
      <Container>
        <Image src={background}/>
        <Icon src={foto}/>
      </Container>
    );
  };
  