import styled from 'styled-components';

export const Heading = styled.h2`
    color: green;
    font-size: 50px;

`;

const Heading2 = styled(Heading)`
color: red;
font-style: italic;
font-size: 40px;
`;

const Card = () => {
    return (
        <div>
            <Heading>YEYEYEY</Heading>
            <Heading2>WoopWooop</Heading2>
        </div>
        
    );
};

export default Card;