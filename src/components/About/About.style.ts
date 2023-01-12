import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-left: 10rem;
    padding-top: 3rem;
`;

export const Title = styled.div`
    font-size: 3.2rem;
`;

export const Text = styled.div`
    font-size: 2.4rem;
    text-align: center;
    margin-top: 2rem;
`;

export const IconsArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const Icon = styled.img`
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
`;
