import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { RocketState } from '../Context/RocketContext';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    let { credential, validate } = RocketState();
    let history = useNavigate();
    return (
        <Container
            sx={{
                mt: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                color: 'white',
                borderRadius: '10px',
                p: '10px',
            }}
        >
            <Grid>
                <Typography variant="h3">SpaceVue 🚀</Typography>
            </Grid>
            <Grid sx={{ display: 'flex' }}>
                {validate.clicked && !validate.error && (
                    <Grid sx={{ pr: '10px' }}>
                        <Typography variant="h4">
                            Welcome {credential.userName}
                        </Typography>
                    </Grid>
                )}
                {validate.clicked && !validate.error && (
                    <Grid>
                        <Button
                            variant="contained"
                            onClick={(e) => history('/')}
                        >
                            Logout
                        </Button>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default Header;
