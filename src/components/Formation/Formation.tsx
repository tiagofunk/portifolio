import { Container, Title } from "./Formation.style";

import udesc from "../../assets/img/udesc.png"
import { ItemList } from "../ItemList/ItemList";

export const Formation = () => {

    const FORMATIONS = [
        [udesc, "Bacharelado em Engenharia de Software", "Universidade do Estado de Santa Catarina", "2016-2019"],
        [udesc, "Mestrado em Computação Aplicada", "Universidade do Estado de Santa Catarina", "2021-Presente"]
    ]
  
  return (
    <Container>
      <Title>Formação Acadêmica</Title>
      {FORMATIONS.map( (args) => (
        <ItemList image={args[0]} title={args[1]} subtitle={args[2]} text={args[3]}/>
      ))}
    </Container>
  );
};
