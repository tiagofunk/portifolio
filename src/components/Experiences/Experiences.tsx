import { Container, Title } from "./Experiences.style";

import udesc from "../../assets/img/udesc.png";
import nelogica from "../../assets/img/nelogica.jpeg";
import profes from "../../assets/img/profes.png";
import { ItemList } from "../ItemList/ItemList";

export const Experiences = () => {
  const experiencesList = [
    {
        photo:profes,
        title:"Professor particula de programação",
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
      {experiencesList.map((experience) => (
        <ItemList
          image={experience.photo}
          title={experience.title}
          subtitle={experience.subtitle}
          text={experience.text}
        />
      ))}
    </Container>
  );
};
