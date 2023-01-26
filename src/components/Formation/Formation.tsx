import { Container, Title } from "./Formation.style";

import udesc from "../../assets/img/Icons/udesc.png"
import { ItemList } from "../ItemList/ItemList";

export const Formation = () => {
  const title = "Formação Acadêmica";
  const FORMATIONS = [
      {photo:udesc, title:"Bacharelado em Engenharia de Software", subtitle:"Universidade do Estado de Santa Catarina", text:"2016-2019"},
      {photo:udesc, title:"Mestrado em Computação Aplicada", subtitle:"Universidade do Estado de Santa Catarina", text:"2021-Presente"}
  ]

  return (
    <Container>
      <Title>{title}</Title>
      {FORMATIONS.map( (content) => (
        <ItemList image={content.photo} title={content.title} subtitle={content.subtitle} text={content.text}/>
      ))}
    </Container>
  );
};
