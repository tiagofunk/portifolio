import { Container, Title, IconsArea, Icon } from "./Contact.style";

import github from "../../assets/img/About/github.png";
import linkedin from "../../assets/img/About/linkedin.png";
import gmail from "../../assets/img/About/gmail.png";

export const Contact = () => {

  return (
    <Container>
        <Title>Meus contatos</Title>
      <IconsArea>
        <a href="https://github.com/tiagofunk" target="_blank" rel="noreferrer"><Icon src={github} /></a>
        <a href="https://github.com/tiagofunk" target="_blank" rel="noreferrer"><Icon src={linkedin} /></a>
        <Icon src={gmail} />
      </IconsArea>
    </Container>
  );
};
