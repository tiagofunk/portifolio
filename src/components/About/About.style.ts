import styled from "styled-components";
import Theme from "../../theme/Theme";

const { fonts } = Theme;

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-left: 10rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const Title = styled.div`
    font-size: ${fonts.size.large};
`;

export const Text = styled.div`
    font-size: ${fonts.size.default};
    text-align: center;
    margin: 1rem;
`;
