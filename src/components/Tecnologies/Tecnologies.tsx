import { AllImages, Container, Image, Title } from "./Tecnologies.style";

import java from "../../assets/img/tecnologies/java.png";
import node from "../../assets/img/tecnologies/node.png";
import cpp from "../../assets/img/tecnologies/cpp.png";
import c from "../../assets/img/tecnologies/c.png";
import python from "../../assets/img/tecnologies/python.png";
import git from "../../assets/img/tecnologies/git.png";
import react from "../../assets/img/tecnologies/react.png";
import latex from "../../assets/img/tecnologies/latex.png";
import pandas from "../../assets/img/tecnologies/pandas.png";
import linux from "../../assets/img/tecnologies/linux.png";

export const Tecnologies = () => {
  const title = "Tecnologias que eu utilizo";
  const icons1 = [java, node, react, git, python ];
  const icons2 = [ cpp, c, latex, pandas, linux];

  return (
    <Container>
      <Title>{title}</Title>
      <AllImages>
        {icons1.map((icon) => (
          <Image src={icon} />
        ))}
      </AllImages>
      <AllImages>
        {icons2.map((icon) => (
          <Image src={icon} />
        ))}
      </AllImages>
    </Container>
  );
};
