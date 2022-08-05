import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const Wrapper = styled(Container)`
    background: red;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
`;

const Login = () => {
    return (            
        <Wrapper defaultValue={30}>
            Hello Login
        </Wrapper>
    )
}

export default Login;