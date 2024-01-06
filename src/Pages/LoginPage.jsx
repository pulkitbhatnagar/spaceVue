import React, { useEffect } from 'react';
import {
    Card,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Alert,
} from '@mui/material';
import { RocketState } from '../Context/RocketContext';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const { credential, setCredentials, validate, setValidate } = RocketState();
    let history = useNavigate();

    useEffect(() => {
        setCredentials({ userName: '', password: '' });
        setValidate({ message: '', clicked: false, error: false });
    }, []);

    function handleValidateCredentials() {
        let { userName, password } = credential;
        if (userName === 'pulkit' && password === '1234') {
            setValidate({
                clicked: true,
                message: `Welcome ${userName} !!! Successfully Logged In`,
                error: false,
            });
            history(`/display`);
        } else {
            setValidate({
                clicked: true,
                message: 'Username/password is incorrect',
                error: true,
            });
        }
    }
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Card
                sx={{
                    backgroundColor: 'white',

                    width: '30%',
                    borderRadius: '100% 100% 0px 0px',
                    height: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    zIndex: 2,
                }}
            >
                <Grid
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Card
                        sx={{
                            backgroundColor: 'black',
                            width: '200px',
                            borderRadius: '0px 0px 100% 100%',
                            height: '50px',
                        }}
                    >
                        <Card
                            sx={{
                                backgroundColor: 'darkred',
                                width: '200px',
                                borderRadius: '0px 0px 100% 100%',
                                height: '50px',
                            }}
                        ></Card>
                    </Card>

                    <Card
                        sx={{
                            backgroundColor: 'darkred',
                            mt: '200px',
                            mx: '45px',
                            width: '100px',
                            borderRadius: '100%',
                            height: '100px',
                        }}
                    ></Card>
                </Grid>
            </Card>

            <Grid
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 2,
                }}
            >
                <Card
                    sx={{
                        backgroundColor: 'darkred',
                        width: '20%',
                        height: '200px',
                        display: 'flex',
                        borderRadius: '100% 0px 0px 0px ',
                        alignContent: 'end',
                        zIndex: 2,
                    }}
                ></Card>
                <Card
                    sx={{
                        backgroundColor: 'white',
                        width: '30%',
                        height: '400px',
                        borderRadius: '0px 0px 10% 10%',
                        zIndex: 2,
                    }}
                >
                    <Grid sx={{ padding: '10px' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h4">
                            Login
                        </Typography>
                        <Grid sx={{ padding: '10px' }}>
                            <TextField
                                id="outlined-basic"
                                label="UserName"
                                variant="outlined"
                                sx={{ width: '100%' }}
                                onChange={(e) => {
                                    setCredentials({
                                        ...credential,
                                        userName: e.target.value,
                                    });
                                }}
                            />
                        </Grid>
                        <Grid sx={{ padding: '10px' }}>
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                sx={{ width: '100%' }}
                                type="password"
                                onChange={(e) => {
                                    setCredentials({
                                        ...credential,
                                        password: e.target.value,
                                    });
                                }}
                            />
                        </Grid>
                        <Grid sx={{ padding: '10px', textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                onClick={handleValidateCredentials}
                            >
                                Submit
                            </Button>
                        </Grid>
                        {validate.clicked && (
                            <Grid>
                                <Alert
                                    severity={
                                        !validate.error ? 'success' : 'error'
                                    }
                                    variant="filled"
                                >
                                    {validate.message}
                                </Alert>
                            </Grid>
                        )}
                    </Grid>
                </Card>
                <Card
                    sx={{
                        backgroundColor: 'darkred',
                        width: '20%',
                        height: '200px',
                        borderRadius: '0px 100% 0px 0px ',
                        zIndex: 2,
                    }}
                ></Card>
            </Grid>
            <Card
                sx={{
                    backgroundColor: 'grey',
                    borderRadius: '0px 0pc 100px 100px ',
                    width: '20%',
                    height: '30px',
                    zIndex: 2,
                }}
            ></Card>
        </Container>
    );
};

export default LoginPage;
