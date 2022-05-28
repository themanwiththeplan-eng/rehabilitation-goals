import './index.css';
import React from 'react';
import TextField  from '@material-ui/core/TextField';
import Container  from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from "react-hook-form";

export default function LoginPage () {
    const { 
        // register,
        handleSubmit,
    } = useForm();
    const onSubmit =(data) => console.log(data)
    return (
        <Container maxWidth="xs">
            <h1>Hello</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={2}>
                    <TextField 
                        variant ="outlined" 
                        label="email" 
                        fullWidth 
                        autoComplete="email" 

                        autoFoucs />
                        {/* {...register("email", {required: "Required" })} */}
                </Box>
                <Box mb={2}>
                    <TextField 
                        variant="outlined"
                        label="password" 
                        fullWidth />
                        {/* {...register("password", {required: "Required" })} */}
                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login In
                </Button>
                
            </form>
        </Container>
    );
}
