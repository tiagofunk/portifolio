import { Container, Title, IconsArea, Icon } from "./Contact.style";

import github from "../../assets/img/Contact/github.png";
import linkedin from "../../assets/img/Contact/linkedin.png";
import gmail from "../../assets/img/Contact/gmail.png";
import whatsapp from "../../assets/img/Contact/whatsapp.png";

export const Contact = () => {
  const title = "Meus contatos";
  const githubLink = "https://github.com/tiagofunk";
  const linkedinLink = "https://www.linkedin.com/in/tiago-funk/";
  const emailLink = "mailto:tiagoff.tf@gmail.com?subject=Quero falar com você"
  const whatsappLink = "https://api.whatsapp.com/send?1=pt_BR&phone=5547988336148&text=Olá, gostaria de falar com você";
  const whatsappCaption = "Clique aqui para falar comigo pelo Whatsapp!";

  return (
    <Container>
      <Title>{title}</Title>
      <IconsArea>
        <a href={githubLink} target="_blank" rel="noreferrer"><Icon src={github} /></a>
        <a href={linkedinLink} target="_blank" rel="noreferrer"><Icon src={linkedin} /></a>
        <a href={emailLink} ><Icon src={gmail} /></a>
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <Icon src={whatsapp} alt={whatsappCaption}/>
        </a>
      </IconsArea>
    </Container>
  );
};
