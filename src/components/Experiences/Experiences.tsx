import { Container, Title } from "./Experiences.style";

import udesc from "../../assets/img/Icons/udesc.png";
import ifc from "../../assets/img/Icons/ifc.png";
import nelogica from "../../assets/img/Icons/nelogica.jpeg";
import profes from "../../assets/img/Icons/profes.png";
import { ItemList } from "../ItemList/ItemList";

export const Experiences = () => {
  const title = "Experiências";
  const contentList = [
    {
      photo: udesc,
      title: "Professor substituto do curso de Engenharia de software",
      subtitle: "Matérias ministradas: Modelagem de Banco de Dados, Padrões de Projeto, Engenharia de Requisitos, Gerenciamento de Projetos I, Fundamentos de Engenharia de Software e Projeto Integrador I",
      text: "Nov 2023 - Presente",
    },
    {
      photo: ifc,
      title: "Professor substituto do curso de Informática",
      subtitle: "Matérias ministradas: Web Design, Fundamentos da Informática, Banco de dados, Engenharia de Software,Programação II, Programação Mobile e Hardware e Sistemas Operacionais",
      text: "Mar 2023 - Presente",
    },
    {
      photo:profes,
      title:"Professor particular de programação nas Plataformas SuperProf e Profes",
      subtitle:"Professor de programação e matemática.",
      text:"Out 2022 - Presente"
    },
    {
      photo: nelogica,
      title: "Desenvolvedor na Nelogica Sistemas de Software",
      subtitle: "Desenvolvedor Android em Kotlin na gestão de ativos de mercado financeiro.",
      text: "Dez 2019 - Maio 2020",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Sistemas Distribuídos",
      subtitle: "Atendimento à alunos e elaboração de materiais para o professor.",
      text: "Ago 2019 - Dez 2019",
    },
    {
      photo: udesc,
      title: "Bolsista de Pesquisa - Programação Multiagentes",
      subtitle: "Desenvolvimento de algoritmos de coordenação para sistemas multiagentes.",
      text: "Fev 2018 - Ago 2019",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Programação II",
      subtitle: "Atendimento à alunos e elaboração de materiais para o professor.",
      text: "Ago 2017 - Dez 2017",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Probabilidade e Estatística",
      subtitle: "Atendimento à alunos e elaboração de materiais para o professor.",
      text: "Fev 2017 - Jul 2017",
    },
    {
      photo: udesc,
      title: "Monitor da matéria Matemática Discreta",
      subtitle: "Atendimento à alunos e elaboração de materiais para o professor.",
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
