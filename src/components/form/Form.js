import styled from "styled-components";

export const FormWrapper = styled.form`
    width: 70%;
    margin: auto;
    border: 2px solid black;
    padding: 10px;
    margin-top: 10px;

`;

export const Input = styled.input`
    width: 100%;
`;

export const Label = styled.label`
    color: white;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;

`;

const Form = () => {
    return (
        <div>
            <FormWrapper>
                <Div>
                    <Label for="firstname">First Name:</Label>
                    <Input type="text" id="firstname"></Input>
                    <Label for="lastname">Last name:</Label>
                    <Input type="text" id="lastname"></Input>
                    <Label for="email">Email:</Label>
                    <Input type="text" id="email"></Input>
                    <Label for="text">Text:</Label>
                    <Input type="text" id="text"></Input>
                </Div>
            </FormWrapper>
            
        </div>
    )
}

export default Form
