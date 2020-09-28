import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import NumberFormat from 'react-number-format'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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

const useStyleTypography = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    }
})
export default function CountryData() {

    const classes = useStyles();
    const classesTypography = useStyleTypography();
    const [countryData, setcountryData] = useState();
    const [dataloading, setdataloading] = useState(false);

    const [selectedCountry, setselectedCountry] = useState('');

    const [listofcountries, setlistofcountries] = useState() // for menu purposes

    useEffect(() => {
        async function FetchcountryData() {
            setdataloading(true);
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
            setdataloading(false)


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
                Country : {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.title
            ) : (null)
            )
                }
            </Paper>
            <Paper elevation={4} >
                total_cases : {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_cases
            ) : (null)
            )
                }            </Paper>
            <Paper elevation={4} >
                total_recovered : {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_recovered
            ) : (null)
            )
                } 
            </Paper>
            <Paper elevation={4} >
                total_unresolved :{countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_unresolved
            ) : (null)
            )
                } 
            </Paper>
            <Paper elevation={4} >
                total_deaths : {countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_deaths
            ) : (null)
            )
                } 
            </Paper>
            <Paper elevation={4} >
                total_new_cases_today :{countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_new_cases_today
            ) : (null)
            )
                } 
            </Paper>
            <Paper elevation={4} >
                total_new_deaths_today :{countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_new_deaths_today
            ) : (null)
            )
                } 
            </Paper>
            <Paper elevation={4} >
                total_active_cases :{countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_active_cases
            ) : (null)
            )
                } 
            </Paper>
            <Paper elevation={4} >
                total_serious_cases :{countryData && countryData.map(c => c.title === selectedCountry ? (
                c.total_serious_cases
            ) : (null)
            )
                } 
            </Paper>

        </div>

    );
}