import React, { useEffect } from 'react';
import { makeStyles, Grid, Container, Typography, Divider } from '@material-ui/core';
import Aos from 'aos';


const useStyle = makeStyles(() => ({
    section: {
        padding: "4rem",
        background: "#fff",
    },
    title: {
        textAlign: "center",
    },
    imagesAria: {
        textAlign: "center",
    },
    images: {
        height:"70%",
        width:"60%",
    },
    imageRedux: {
        height:"80%",
        width:"80%",
    },
    image_ci: {
        height:"60%",
        width:"50%",
    },
    imageText: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: 40
    },
    divider: {
        width: 100,
        margin: "0 auto",
        color: "#6B6C6B",
        border: "2px solid",
        borderRadius: "2px"
    },
    divider_m: {
        width: 220,
        margin: "0 auto",
        color: "#6B6C6B",
        border: "1px solid",
        borderRadius: "2px"
    },
    divider_l: {
        width: 290,
        margin: "0 auto",
        color: "#6B6C6B",
        border: "1px solid",
        borderRadius: "2px"
    }
}))

const SkillsSection = () => {
    const classes = useStyle();

    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 0,
            anchorPlacement: "center-center",
        })
    },[])

    return (
        <div className={classes.section}>
            <h1 className={classes.title}>Skills</h1>
            <Divider className={classes.divider} />
            <div className="module-spacer--medium"></div>
            <div className="module-spacer--medium"></div>
            <Container maxWidth="xl">
                <Typography className={classes.title} variant="h5">プログラミング言語</Typography>
                <Divider className={classes.divider_m} />
                <div className="module-spacer--medium"></div>
                <Grid  container alignItems="center" justify="space-around" direction="row" spacing={5}>
                    <Grid item xs={12} md={4} data-aos="fade-up">
                        <div className={classes.imagesAria}>
                            <img className={classes.images} src="/images/html-css-js.png" alt="プログラミング images"/>
                        </div>
                    <p className={classes.imageText}>HTML CSS JS</p>
                    </Grid>
                    <Grid item xs={12} md={4} data-aos="fade-up">
                    <div className="module-spacer--medium"></div>
                    <div className="module-spacer--medium"></div>
                        <div className={classes.imagesAria}>
                            <img className={classes.images} src="/images/php-icon.png" alt="プログラミング images"/>
                        </div>
                        <div className="module-spacer--extra-small"></div>
                        <div className="module-spacer--extra-small"></div>
                        <p className={classes.imageText}>PHP</p>
                    </Grid>
                    <Grid item xs={12} md={4} data-aos="fade-up">
                    <div className="module-spacer--extra-small"></div>
                    <div className="module-spacer--extra-small"></div>
                        <div className={classes.imagesAria}>
                            <img className={classes.images} src="/images/ts-icon.png" alt="プログラミング images"/>
                        </div>
                        <div className="module-spacer--medium"></div>
                    <p className={classes.imageText}>TypeScript</p>
                    </Grid>
                </Grid>
                <div className="module-spacer--medium"></div>
                <div className="module-spacer--medium"></div>
            </Container>
            <div className="module-spacer--medium"></div>
            <Container maxWidth="xl">
                <Typography className={classes.title} variant="h5">ライブラリ フレームワーク</Typography>
                <Divider className={classes.divider_l} />
                <div className="module-spacer--medium"></div>
                <Grid  container alignItems="center" justify="space-around" direction="row" spacing={5}>
                    <Grid item xs={12} md={3} data-aos="fade-up">
                        <div className={classes.imagesAria}>
                            <img className={classes.images} src="/images/react-icon.png" alt="プログラミング images"/>
                        </div>
                        <p className={classes.imageText}>React</p>
                    </Grid>
                    <Grid item xs={12} md={3} data-aos="fade-up">
                        <div className={classes.imagesAria}>
                            <img className={classes.imageRedux} src="/images/redux-icon.png" alt="プログラミング images"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} data-aos="fade-up">
                        <div className={classes.imagesAria}>
                            <img className={classes.images} src="/images/firebase-icon.png" alt="プログラミング images"/>
                        </div>
                        <p className={classes.imageText}>Firebase</p>
                    </Grid>
                    <Grid item xs={12} md={3} data-aos="fade-up">
                        <div className={classes.imagesAria}>
                            <img className={classes.image_ci} src="/images/ci-icon.png" alt="プログラミング images"/>
                        </div>
                        <p className={classes.imageText}>Codeigniter</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SkillsSection
