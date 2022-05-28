import React from 'react';
import TextField  from '@material-ui/core/TextField';
import Container  from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from "react-hook-form";

export default function findGoal(){
    const{
        handleSubmit,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useForm(
        {
            mode: 'onSubmit',
        }
    );

    const onSubmit = (data) => console.log(data)

    return(
        <Container maxWidth = "xs">
            <h1>Search for a Goal</h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <Box mb = {2}>
                    <TextField
                        variant = "standard"
                        label = "searchBox"
                        fullWidth
                        autoFocus />
                </Box>
                <Button type = "submit" variant = "contained" color = "primary" fullWidth>
                    Search for a Goal ID
                </Button>
            </form>
        </Container>
    );


}