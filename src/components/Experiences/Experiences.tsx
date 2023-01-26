import { Container, Title } from "./Experiences.style";

import udesc from "../../assets/img/Icons/udesc.png";
import nelogica from "../../assets/img/Icons/nelogica.jpeg";
import profes from "../../assets/img/Icons/profes.png";
import { ItemList } from "../ItemList/ItemList";

export const Experiences = () => {
  const title = "Experiências";
  const contentList = [
    {
      photo:profes,
      title:"Professor particular de programação nas Plataformas SuperProf e Profes",
      subtitle:"Prestração de aulas particulares em programação e matemática.",
      text:"Out 2022 - Momento"
    },
    {
      photo: nelogica,
      title: "Desenvolvedor na Nelogica Sistemas de Software",
      subtitle: "Desenvolvedor de aplicativos Android em Kotlin na gestão de ativos de mercado financeiro.",
      text: "Dez 2019 - Maio 2020",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Sistemas Distribuídos",
      subtitle: "Atendimento à alunos com dúvidas sobre a matéria. Elaboração de materiais para o professor utilizar durante as aulas.",
      text: "Ago 2019 - Dez 2019",
    },
    {
      photo: udesc,
      title: "Bolsista de Pesquisa - Programação Multiagentes",
      subtitle: "Desenvolvimento de algoritmos de coordenação para sistemas multiagentes utilizando o framework JaCaMo. Participação do Multi Agent Programing Contest 2018 com a equipe Akuanduba-UDESC.",
      text: "Fev 2018 - Ago 2019",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Programação II",
      subtitle: "Atendimento à alunos com dúvidas sobre a matéria. Elaboração de materiais para o professor utilizar durante as aulas.",
      text: "Ago 2017 - Dez 2017",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Probabilidade e Estatística",
      subtitle: "Atendimento à alunos com dúvidas sobre a matéria. Elaboração de materiais para o professor utilizar durante as aulas.",
      text: "Fev 2017 - Jul 2017",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Matemática Discreta",
      subtitle: "Atendimento à alunos com dúvidas sobre a matéria. Elaboração de materiais para o professor utilizar durante as aulas.",
      text: "Ago 2016 - Dez 2016",
    },
  ];

  return (
    <Container>
      <Title>{title}</Title>
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
