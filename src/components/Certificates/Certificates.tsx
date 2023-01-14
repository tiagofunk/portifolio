import { Container, Title } from "./Certificates.style";

import alura from "../../assets/img/alura.jpeg";
import { ItemList } from "../ItemList/ItemList";

export const Certificates = () => {
  const contentList = [
    {
      photo: alura,
      title: "Git e Github: controle e compartilhe seu código",
      subtitle: "Alura",
      text: "Abr 2020",
    },
    {
      photo: alura,
      title: "Python para Data Science: linguagem e Numpy",
      subtitle: "Alura",
      text: "Abr 2020",
    },
    {
      photo: alura,
      title: "C: recursos avançados da linguagem",
      subtitle: "Alura",
      text: "Mar 2020",
    },
    {
      photo: alura,
      title: "Curso de C III: Recursos avançados da linguagem",
      subtitle: "Alura",
      text: "Mar 2020",
    },
    {
      photo: alura,
      title: "Curso de Data Science: Primeiros passos",
      subtitle: "Alura",
      text: "Mar 2020",
    },
    {
      photo: alura,
      title: "Data Science: analise e visualização de dados.",
      subtitle: "Alura",
      text: "Mar 2020",
    },
    {
      photo: alura,
      title: "Python para Data Science: Funções, Pacotes e Pandas",
      subtitle: "Alura",
      text: "Mar 2020",
    },
  ];

  return (
    <Container>
      <Title>Experiências</Title>
      {contentList.map((content) => (
        <ItemList
          image={content.photo}
          title={content.title}
          subtitle={content.subtitle}
          text={content.text}
        />
      ))}
    </Container>
  );
};
