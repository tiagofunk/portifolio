import styled from "styled-components";
import Theme from "../../theme/Theme";

const { fonts } = Theme;

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 1rem;
    margin-top: 2rem;
`;

export const Image = styled.img`
    width: 5.5rem;
    height: 5.5rem;
`;


export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
`;

export const Title = styled.div`
    font-size: ${fonts.size.large};
`;

export const SubTitle = styled.div`
    font-size: ${fonts.size.default};
`;

export const Text = styled.div`
    font-size: ${fonts.size.default};
`;