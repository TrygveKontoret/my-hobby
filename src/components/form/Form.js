import styled from "styled-components";

export const FormWrapper = styled.form`
    width: 70%;
    margin: auto;
    border: 2px solid black;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;

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

export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
`

const Form = () => {
    return (
        <div>
            <FormWrapper>
                <Div>
                    <Label for="firstname">First Name:</Label>
                    <Input type="text" id="firstname"></Input>
                </Div>
                <Div>
                    <Label for="lastname">Last name:</Label>
                    <Input type="text" id="lastname"></Input>
                </Div>
                <Div>
                    <Label for="email">Email:</Label>
                    <Input type="text" id="email"></Input>
                </Div>
                <Div>
                    <Label for="text">Text:</Label>
                    <TextArea type="text" id="text"></TextArea>
                </Div>
            </FormWrapper>
            
        </div>
    )
}

export default Form
