import { Container, Title, Text, IconsArea, Icon } from "./About.style";

import github from "../../assets/img/About/github.png";
import linkedin from "../../assets/img/About/linkedin.png";
import gmail from "../../assets/img/About/gmail.png";

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
        <a href="https://github.com/tiagofunk" target="_blank" rel="noreferrer"><Icon src={github} /></a>
        <a href="https://github.com/tiagofunk" target="_blank" rel="noreferrer"><Icon src={linkedin} /></a>
        <Icon src={gmail} />
      </IconsArea>
    </Container>
  );
};
