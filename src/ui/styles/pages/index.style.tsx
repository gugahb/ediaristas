import { experimentalStyled as styled } from "@material-ui/core/styles";

export const FormElementsContainer = styled('div')`
display: flex;
flex-direction: column;
align-itens: center;
gap: ${({theme}) => theme.spacing(5)}
max-width: 650px;
`;