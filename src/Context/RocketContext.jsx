import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { processAmountInData } from '../Utils/Helper';
let RocketApp = createContext();

const RocketContext = ({ children }) => {
    let [data, setData] = useState([]);
    const [credential, setCredentials] = useState({
        userName: '',
        password: '',
    });
    const [validate, setValidate] = useState({
        message: '',
        clicked: false,
        error: false,
    });
    useEffect(() => {
        axios
            .get(
                'https://www.ag-grid.com/example-assets/space-mission-data.json'
            )
            .then((data) => {
                setData(processAmountInData(data.data));
            })
            .catch((e) => {
                console.log('some thing went wrong');
            });
    }, []);
    return (
        <RocketApp.Provider
            value={{
                data,
                setData,
                credential,
                setCredentials,
                validate,
                setValidate,
            }}
        >
            {children}
        </RocketApp.Provider>
    );
};
export default RocketContext;

export const RocketState = () => {
    return useContext(RocketApp);
};
