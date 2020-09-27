import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import NumberFormat from 'react-number-format'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        },
    },
}));

const useStyleTypography = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    }
})
export default function GlobalData() {

    const classes = useStyles();
    const classesTypography = useStyleTypography();

    const [globalData, setglobaldata] = useState();
    const [dataloading, setdataloading] = useState(false);
    useEffect(() => {
        async function FetchGlobalData() {
            setdataloading(true);
            const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const result = await response.json();
            console.log(result)
            setglobaldata(result)
            setdataloading(false)
        }
        FetchGlobalData();
    }, [])

    if (dataloading) {
        let loading = 'Loading ...'
        return (
            <div className={classes.root}>
                <Paper elevation={4} >
                    <div className={classesTypography.root}>
                        <Typography variant='h3' gutterBottom style={{ color: 'black' }}>
                            {loading}
                        </Typography>
                        <Typography variant='subtitle2' gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                            Global Data Record of Today
                         </Typography>
                    </div>
                </Paper>
                <Paper elevation={4} >
                    <div className={classesTypography.root}>
                        <Typography variant='h3' gutterBottom style={{ color: 'orange' }}>
                            {loading}                        </Typography>
                        <Typography variant='subtitle2' gutterBottom style={{ color: 'orange', fontWeight: 'bold' }}>
                            Active
                         </Typography>
                    </div>
                </Paper>
                <Paper elevation={4} >
                    <div className={classesTypography.root}>
                        <Typography variant='h3' gutterBottom style={{ color: 'green' }}>
                            {loading}
                        </Typography>
                        <Typography variant='subtitle2' gutterBottom style={{ color: 'green', fontWeight: 'bold' }}>
                            Recovered
                         </Typography>
                    </div>
                </Paper>
                <Paper elevation={4} >
                    <div className={classesTypography.root}>
                        <Typography variant='h3' gutterBottom style={{ color: 'red' }}>
                            {loading}
                        </Typography>
                        <Typography variant='subtitle2' gutterBottom style={{ color: 'red', fontWeight: 'bold' }}>
                            Fatalities
                         </Typography>
                    </div>
                </Paper>

            </div>
        );
    }
    return (
        <div className={classes.root}>
            <Paper elevation={4} >
                <div className={classesTypography.root}>
                    <Typography variant='h3' gutterBottom style={{ color: 'black' }}>
                        <NumberFormat value={globalData && globalData.results[0].total_cases} displayType={'text'} thousandSeparator={true} />

                    </Typography>
                    <Typography variant='h5' gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                        Global Cases
                     </Typography>
                </div>
            </Paper>
            <Paper elevation={4} >
                <div className={classesTypography.root}>
                    <Typography variant='h3' gutterBottom style={{ color: 'orange' }}>
                        <NumberFormat value={globalData && globalData.results[0].total_active_cases + globalData.results[0].total_unresolved} displayType={'text'} thousandSeparator={true} />


                    </Typography>
                    <Typography variant='h5' gutterBottom style={{ color: 'orange', fontWeight: 'bold' }}>
                        Global Active Cases
                     </Typography>
                </div>
            </Paper>
            <Paper elevation={4} >
                <div className={classesTypography.root}>
                    <Typography variant='h3' gutterBottom style={{ color: 'green' }}>
                        <NumberFormat value={globalData && globalData.results[0].total_recovered} displayType={'text'} thousandSeparator={true} />


                    </Typography>
                    <Typography variant='h5' gutterBottom style={{ color: 'green', fontWeight: 'bold' }}>
                        Global Recovered 
                     </Typography>
                </div>
            </Paper>
            <Paper elevation={4} >
                <div className={classesTypography.root}>
                    <Typography variant='h3' gutterBottom style={{ color: 'red' }}>
                        <NumberFormat value={globalData && globalData.results[0].total_deaths} displayType={'text'} thousandSeparator={true} />


                    </Typography>
                    <Typography variant='h5' gutterBottom style={{ color: 'red', fontWeight: 'bold' }}>
                       Global Deaths
                     </Typography>
                </div>
            </Paper>

        </div>
    );

    return (
        <div className={classes.root}>
            <Paper elevation={4} >
                <div className={classesTypography.root}>
                    <Typography variant='h3' gutterBottom style={{ color: 'black' }}>
                        {globalData && globalData.results[0].total_cases}
                    </Typography>
                    <Typography variant='subtitle2' gutterBottom style={{ color: 'black', fontWeight: 'bold' }}>
                        Global Data Record of Today
                     </Typography>
                </div>
            </Paper>
            <Paper elevation={4} >
                <div className={classesTypography.root}>
                    <Typography variant='h3' gutterBottom style={{ color: 'orange' }}>
                        {globalData && globalData.results[0].total_active_cases + globalData.results[0].total_unresolved}
                    </Typography>
                    <Typography variant='subtitle2' gutterBottom style={{ color: 'orange', fontWeight: 'bold' }}>
                        Active
                     </Typography>
                </div>
            </Paper>
            <Paper elevation={4} >
                <div className={classesTypography.root}>
                    <Typography variant='h3' gutterBottom style={{ color: 'green' }}>
                        {globalData && globalData.results[0].total_recovered}
                    </Typography>
                    <Typography variant='subtitle2' gutterBottom style={{ color: 'green', fontWeight: 'bold' }}>
                        Recovered
                     </Typography>
                </div>
            </Paper>
            <Paper elevation={4} >
                <div className={classesTypography.root}>
                    <Typography variant='h3' gutterBottom style={{ color: 'red' }}>
                        {globalData && globalData.results[0].total_deaths}
                    </Typography>
                    <Typography variant='subtitle2' gutterBottom style={{ color: 'red', fontWeight: 'bold' }}>
                        Fatalities
                     </Typography>
                </div>
            </Paper>

        </div>
    );
}