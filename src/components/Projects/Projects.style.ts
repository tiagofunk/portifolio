import styled from "styled-components";
import Theme from "../../theme/Theme";

const { fonts } = Theme;

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-top: 3rem;
    margin-left: 10rem;
    padding-top: 3rem;
    padding-bottom: 1rem;
`;

export const Title = styled.div`
    font-size: ${fonts.size.large};
`;

export const Text = styled.div`
    font-size: ${fonts.size.default};
    text-align: center;
`;

export const BoxProjects = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3rem;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 3%;
    margin-top: 1rem;
    margin-left: 1rem;
    padding: .5rem;
    width: 43%;

    &:hover {
        box-shadow: 2px 2px 2px 2px gray;
    }
`;

export const Img = styled.img`
    height: 8rem;
    margin: 1rem;
`;