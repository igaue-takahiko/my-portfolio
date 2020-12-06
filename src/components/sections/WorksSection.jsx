import React, { useEffect } from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import Aos from 'aos';

import { CardItem } from '../UI-kit';

const useStyles = makeStyles(() => ({
    cards: {
        padding: "4rem",
        background: "#fff"
    },
    title: {
        textAlign: "center"
    },
    driver: {
        width: 100,
        margin: "0 auto",
        color: "#6B6C6B",
        border: "2px solid",
        borderRadius: "2px"
    },
    cardsContainer: {
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        maxWidth: "100%",
        width: "90%",
        margin: "0 auto",
    },
    cardsWrapper: {
        position: "relative",
        margin: "50px 0 45px"
    },
    cardsItems: {
        marginBottom: 24,
        "@media only screen and (min-width: 1024px)": {
            display: "flex"
        }
    },
}))

const WorksSection = () => {
    const classes = useStyles();

    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 0,
            anchorPlacement: "center-center",
        })
    },[])

    return (
        <div className={classes.cards}>
            <h1 className={classes.title}>Works</h1>
            <Divider className={classes.driver} />
            <div className={classes.cardsContainer}>
                <div className={classes.cardsWrapper}>
                    <ul className={classes.cardsItems}>
                        <CardItem
                            src="/images/img-8.jpg" label="todo list"
                            text="TODO リストです"
                            siteHref="https://google.com"
                            githubHref="https://google.com"
                        />
                        <CardItem
                            src="/images/img-8.jpg" label="todo list"
                            text="TODO リストです"
                            siteHref="https://google.com"
                            githubHref="https://google.com"
                        />
                        <CardItem
                            src="/images/my-portfolio.jpeg" label="my portfolio"
                            text="React+Firebaseで制作した自分のポートフォリオサイトです！"
                            siteHref="https://google.com"
                            githubHref="https://github.com/igaue-takahiko/my-portfolio"
                        />
                    </ul>
                    <ul className={classes.cardsItems}>
                        <CardItem
                            src="/images/img-8.jpg" label="todo list"
                            text="TODO リストです TODO リストです TODO リストです"
                            siteHref="https://google.com"
                            githubHref=""
                        />
                        <CardItem
                            src="/images/img-8.jpg" label="todo list"
                            text="TODO リストです TODO リストです TODO リストです"
                            siteHref="https://google.com"
                            githubHref="https://google.com"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorksSection
