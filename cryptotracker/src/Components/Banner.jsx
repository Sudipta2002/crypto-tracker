import React from 'react'
import { Container, makeStyles, Typography} from '@material-ui/core'
const useStyles = makeStyles(()=>({
    banner:{
        backgroundImage:"url(./banner2.jpg)",
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent:"space-around",
    },
    tagline:{
        height:"40%",
        display:"flex",
        flexDirection:"column",
        textAlign:"center",
        justifyContent:"center",
    },
}));
const Banner = () => {
    const classes= useStyles();
  return (
    <div className={classes.banner}>
        
        <Container className={classes.bannerContent}>
{/* bvh */}
        <div className={classes.tagline}>
            <Typography
                variant="h2"
                style={{
                    fontWeight:"bold",
                    marginBottom: 15,
                }}
                >
                    Crypto Tracker
            </Typography>
            <Typography
                variant="subtitle2"
                style={{
                    color:"darkgrey",
                    textTransform:"capitalize",
                    
                }}
                >
                    Get all info regarding your Crypto
                </Typography>
        </div>

        </Container>
    </div>
  )
}

export default Banner