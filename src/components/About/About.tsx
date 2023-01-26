import { Container, Title, Text } from "./About.style";

export const About = () => {
  const title = "Tiago Funk";
  const text = [
    "Tenho formação em Engenharia de Software e atualmente sou aluno de mestrado em computação aplicada.",
    "Já atuei com monitoria e projetos de pesquisa durante a faculdade e trabalhei com desenvolvimento android por um breve período.",
    "Programo em Java, C/C++ e Python.",
  ];

  return (
    <Container>
      <Title>{title}</Title>
      {text.map((text) => (
        <Text>{text}</Text>
      ))}
    </Container>
  );
};
