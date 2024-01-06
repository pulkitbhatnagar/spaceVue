import React, { useState } from 'react';
import {
    Container,
    Snackbar,
    Typography,
    Alert,
    Button,
    Grid,
} from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { RocketState } from '../Context/RocketContext';
import { useNavigate } from 'react-router-dom';

const DisplayMissionData = () => {
    let history = useNavigate();
    const { validate, data } = RocketState();
    const [open, setOpen] = useState(
        validate.message.length > 0 ? true : false
    );

    function handleClose() {
        setOpen(false);
    }

    function handleGenerateReport() {
        history('/Charts');
    }

    const columnName = [
        { field: 'mission' },
        { field: 'company' },
        { field: 'location' },
        { field: 'date' },
        { field: 'price' },
        { field: 'successful' },
        { field: 'rocket' },
        {
            field: 'time',
        },
    ];
    return (
        <Container sx={{ height: '90vh' }}>
            <Typography variant="h4">
                Below are the list of missions conducted by us:-
            </Typography>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert severity="success" variant="filled">
                    {validate.message}
                </Alert>
            </Snackbar>
            <div
                className={'ag-theme-quartz-dark'}
                style={{ width: '100%', height: '100%' }}
            >
                <AgGridReact rowData={data} columnDefs={columnName} />
            </div>
            <Grid sx={{ textAlign: 'center' }}>
                <Button
                    variant="contained"
                    sx={{ my: '10px', p: '10px' }}
                    onClick={handleGenerateReport}
                >
                    Click To Generate Chart
                </Button>
            </Grid>
        </Container>
    );
};
export default DisplayMissionData;
