import React, { useEffect } from 'react';
import { Container, Button, Grid } from '@mui/material';
import { RocketState } from '../Context/RocketContext';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useNavigate } from 'react-router-dom';

const Charts = () => {
    let { data, setValidate } = RocketState();
    let history = useNavigate();
    let successData = data.filter((val) => val.successful).length;
    let unsuccessData = data.length - successData;

    useEffect(() => {
        setValidate({
            message: '',
            clicked: true,
            error: false,
        });
    }, []);
    const labels = ['Success', 'Failure'];
    const dataForPie = {
        labels: labels,
        datasets: [
            {
                label: 'Mission Dataset',
                backgroundColor: ['green', 'red'],

                data: [successData, unsuccessData],
            },
        ],
    };

    return (
        <Container sx={{ width: '40%' }}>
            <Pie data={dataForPie} width={300} height={300} />
            <Grid
                sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}
            >
                <Button variant="contained" onClick={() => history('/display')}>
                    Back To Missions
                </Button>
            </Grid>
        </Container>
    );
};
export default Charts;
