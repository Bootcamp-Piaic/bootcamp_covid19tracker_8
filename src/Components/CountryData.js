import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(24),
            height: theme.spacing(16),
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function CountryData() {

    const classes = useStyles();
    const [countryData, setcountryData] = useState();

    const [selectedCountry, setselectedCountry] = useState('');

    const [listofcountries, setlistofcountries] = useState() // for menu purposes

    useEffect(() => {
        async function FetchcountryData() {
            const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const result = await response.json();
            var list = []
            var country = []
            for (let i = 1; i < Object.keys(result.countryitems[0]).length; i++) {
                list.push(result.countryitems[0][i].title)
                country.push(result.countryitems[0][i])
            }
            console.log("result ", result)
            console.log("Names ", list)
            console.log("Lists", country[0].title)
            setlistofcountries(list)
            setcountryData(country)


        }
        FetchcountryData();

    }, [])

    return (
        <div className={classes.root}>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-autowidth-label">Select the Country</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={selectedCountry}
                    onChange={(e) => { setselectedCountry(e.target.value) }}
                    autoWidth
                >
                    {
                        listofcountries && listofcountries.map(countryname => (
                            <MenuItem key={countryname} value={countryname}>{countryname}</MenuItem>
                        ))
                    }

                </Select>

            </FormControl>

            <Paper elevation={4} style={{ width: '100%' }}>
                
                <Typography variant='h3' gutterBottom style={{ color: 'SALMON', fontWeight: 'bold' }}>
                {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.title
            ) : (null)
            )
                } 
                     </Typography>
                     <Typography variant='h6' gutterBottom style={{ color: 'SALMON', fontWeight: 'bold' }}>
                
                    Country
                
                     </Typography>
                     
                 
            </Paper>
            <Paper elevation={4} >
            <Typography variant='h3' gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_cases
            ) : (null)
            )
                } 
                     </Typography>     
                
                   
               <Typography variant='h6' gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                
                Total cases
            
                 </Typography> 
                
                        </Paper>
            <Paper elevation={4} >
            <Typography variant='h3' gutterBottom style={{ color: 'green', fontWeight: 'bold' }}>
                {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_recovered
            ) : (null)
            )
                } 
                     </Typography>
                
                <Typography variant='h6' gutterBottom style={{ color: 'green', fontWeight: 'bold' }}>
                
                Recovered
            
                 </Typography>
            </Paper>
            <Paper elevation={4} >
            <Typography variant='h3' gutterBottom style={{ color: 'Indigo', fontWeight: 'bold' }}>
                {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_unresolved
            ) : (null)
            )
                } 
                     </Typography>
               
                <Typography variant='h6' gutterBottom style={{ color: 'Indigo', fontWeight: 'bold' }}>
                
                 Unresolved
            
                 </Typography>
            </Paper>
            <Paper elevation={4} >
            <Typography variant='h3' gutterBottom style={{ color: 'red', fontWeight: 'bold' }}>
                {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_deaths
            ) : (null)
            )
                } 
                     </Typography>
                <Typography variant='h6' gutterBottom style={{ color: 'red', fontWeight: 'bold' }}>
                
                 Deaths
            
                 </Typography>
            </Paper>
            <Paper elevation={4} >
            <Typography variant='h3' gutterBottom style={{ color: 'violet', fontWeight: 'bold' }}>
                {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_new_cases_today
            ) : (null)
            )
                } 
                     </Typography> 
                <Typography variant='h6' gutterBottom style={{ color: 'violet', fontWeight: 'bold' }}>
                
                New Cases Today
            
                 </Typography>
            </Paper>
            <Paper elevation={4} >
            <Typography variant='h3' gutterBottom style={{ color: 'red', fontWeight: 'bold' }}>
                {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_new_deaths_today
            ) : (null)
            )
                } 
                     </Typography>
                <Typography variant='h6' gutterBottom style={{ color: 'red', fontWeight: 'bold' }}>
                
                 New Deaths Today
            
                 </Typography>
            </Paper>
            <Paper elevation={4} >
            <Typography variant='h3' gutterBottom style={{ color: 'orange', fontWeight: 'bold' }}>
                {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_active_cases
            ) : (null)
            )
                } 
                     </Typography> 
                <Typography variant='h6' gutterBottom style={{ color: 'orange', fontWeight: 'bold' }}>
                
                 Active Cases
            
                 </Typography>
            </Paper>
            <Paper elevation={4} >
            <Typography variant='h3' gutterBottom style={{ color: 'brown', fontWeight: 'bold' }}>
                {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_serious_cases
            ) : (null)
            )
                } 
                     </Typography>
                <Typography variant='h6' gutterBottom style={{ color: 'brown', fontWeight: 'bold' }}>
                
                Serious Cases
            
                 </Typography>
            </Paper>

        </div>

    );
}