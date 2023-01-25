import { Container, Title, IconsArea, Icon } from "./Contact.style";

import github from "../../assets/img/About/github.png";
import linkedin from "../../assets/img/About/linkedin.png";
import gmail from "../../assets/img/About/gmail.png";

export const Contact = () => {

  const githubLink = "https://github.com/tiagofunk";
  const linkedinLink = "https://www.linkedin.com/in/tiago-funk/";
  const emailLink = "mailto:tiagoff.tf@gmail.com?subject=Quero falar com você"

  return (
    <Container>
      <Title>Meus contatos</Title>
      <IconsArea>
        <a href={githubLink} target="_blank" rel="noreferrer"><Icon src={github} /></a>
        <a href={linkedinLink} target="_blank" rel="noreferrer"><Icon src={linkedin} /></a>
        <a href={emailLink} ><Icon src={gmail} /></a>
      </IconsArea>
    </Container>
  );
};
