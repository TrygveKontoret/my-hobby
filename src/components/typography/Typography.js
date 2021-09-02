import styled from 'styled-components';

export const MainHeader = styled.h1`
    font-size: 40px;
    color: ${props => (props.black ? "black" : "white")};
    font-family: sans-serif;
`;

export const SubHeader = styled.h2`
    font-size: 40px;
    color: ${props => (props.black ? "black" : "white")};
    text-align: center;
    margin: 20px;
`;

export const Parag = styled.p`
    font-size: 18px;
    color: ${props => (props.black ? "black" : "white")};
    font-family: sans-serif;
    line-height: 1.5;
`;