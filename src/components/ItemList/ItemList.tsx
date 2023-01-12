import { Container, Title, Image, TextBox, Text, SubTitle } from "./ItemList.style";

interface ItemListProps{
    image: string,
    title: string,
    subtitle: string,
    text: string
}

export const ItemList = ({image,title, subtitle, text}: ItemListProps ) => {
  
  return (
    <Container>
        <Image src={image}/>
        <TextBox>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <Text>{text}</Text>
        </TextBox>
    </Container>
  );
};
