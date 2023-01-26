import { Container, Title } from "./Experiences.style";

import udesc from "../../assets/img/Icons/udesc.png";
import nelogica from "../../assets/img/Icons/nelogica.jpeg";
import profes from "../../assets/img/Icons/profes.png";
import { ItemList } from "../ItemList/ItemList";

export const Experiences = () => {
  const contentList = [
    {
        photo:profes,
        title:"Professor particular de programação",
        subtitle:"Plataforma SuperProf e Profes",
        text:"Out 2022 - Momento"
    },
    {
      photo: nelogica,
      title: "Desenvolvedor Kotlin para Android",
      subtitle: "Nelogica Sistemas de Software",
      text: "Dez 2019 - Maio 2020",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Sistemas Distribuídos",
      subtitle: "Universidade do Estado de Santa Catarina",
      text: "Ago 2019 - Dez 2019",
    },
    {
      photo: udesc,
      title: "Bolsista de Pesquisa - Programação Multiagentes",
      subtitle: "Universidade do Estado de Santa Catarina",
      text: "Fev 2018 - Ago 2019",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Programação II",
      subtitle: "Universidade do Estado de Santa Catarina",
      text: "Ago 2017 - Dez 2017",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Probabilidade e Estatística",
      subtitle: "Universidade do Estado de Santa Catarina",
      text: "Fev 2017 - Jul 2017",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Matemática Discreta",
      subtitle: "Universidade do Estado de Santa Catarina",
      text: "Ago 2016 - Dez 2016",
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
