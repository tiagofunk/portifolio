import { Container, Title, Text, Box, Img, BoxProjects } from "./Projects.style";
import projeto_de_pe from "../../assets/img/Projects/projetodepe.png"
import smart_snake from "../../assets/img/Projects/smartSnake.png"

export const Projects = () => {
  const title = "Projetos";
  const projects = [
    {image:projeto_de_pe,name:"Projeto de pé",description:"Desenvolvimento de site em React",link:"https://github.com/tiagofunk/projetodepe"},
    {image:smart_snake,name:"Pygame",description:"Jogo snake em Python",link:"https://github.com/tiagofunk/Smart-Snake"},
  ]
  
  function createBox(project: any){
    return (
      <Box>
        <Img src={project.image}/>
        <Text>{project.name}</Text>
        <Text>{project.description}</Text>
        <a href={project.link} target="_blank" rel="noreferrer">Github</a>
      </Box>
    )
  };
  return (
    <Container>
      <Title>{title}</Title>
      <BoxProjects>
        {projects.map( p => createBox(p) )}
      </BoxProjects>
    </Container>
  );
};
