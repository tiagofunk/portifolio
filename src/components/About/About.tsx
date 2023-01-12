import { Container, Title, Text, IconsArea, Icon } from "./About.style";

import github from "../../assets/img/About/github.png";
import linkedin from "../../assets/img/About/linkedin.png";
import gmail from "../../assets/img/About/gmail.png";
import { ExternalLink } from "react-external-link";

export const About = () => {
  const TITLE = "Tiago Funk";
  const TEXT = [
    "Tenho formação em Engenharia de Software e atualmente sou aluno de mestrado em computação aplicada.",
    "Já atuei com monitoria e projetos de pesquisa durante a faculdade e trabalhei com desenvolvimento android por um breve período.",
    "Programo em C/C++, Python e Java.",
  ];

  return (
    <Container>
      <Title>{TITLE}</Title>
      {TEXT.map((text) => (
        <Text>{text}</Text>
      ))}
      <IconsArea>
        <ExternalLink href="https://github.com/tiagofunk"><Icon src={github} /></ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/tiago-funk/"><Icon src={linkedin} /></ExternalLink>
        <Icon src={gmail} />
      </IconsArea>
    </Container>
  );
};
