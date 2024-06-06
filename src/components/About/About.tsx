import { Container, Title, Text } from "./About.style";

export const About = () => {
  const title = "Tiago Funk";
  const text = [
    "Tenho formação em Engenharia de Software pela UDESCCEAVI e mestrado em computação aplicada pela UDESC/CCT.",
    "Atualmente sou professor do curso de Informática do IFC-Ibirama e professor do curso de engenharia de software da UDESC/CEAVI.",
    "Programo em Java, C/C++, Python, Node e React.",
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
