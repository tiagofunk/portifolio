import { Container, Title } from "./Awards.style";

import udesc from "../../assets/img/Icons/udesc.png";
import { ItemList } from "../ItemList/ItemList";

export const Awards = () => {
  const title = "Prêmios";
  const contentList = [
    {
        photo:udesc,
        title:"Aluno destaque dos formados de 2019/2 da UDESC",
        subtitle:"Sociedade Brasileira de Computação (SBC)",
        text:"Fev de 2020"
    },
    {
        photo:udesc,
        title:"Certificado de desempenho acadêmico",
        subtitle:"Universidade do Estado de Santa Catarina",
        text:"Fev de 2020"
    },
    {
        photo:udesc,
        title:"Melhor Projeto de Pesquisa",
        subtitle:"V salão de ensino, pesquisa e extensão - SEPEX",
        text:"Set de 2018"
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
