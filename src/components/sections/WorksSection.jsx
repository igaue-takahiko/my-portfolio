import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';

import { CardItem } from '../UI-kit';
import BBSImage from '../../assets/images/BBS-ci3.jpeg';
import COVID_19DashboardImage from '../../assets/images/COVID-19-dashboard.jpeg';
import K2ShopImage from '../../assets/images/K2-SHOP.jpeg';
import SNSImage from '../../assets/images/SNS-app.jpeg';
import MyPortfolioImage from '../../assets/images/my-portfolio.jpeg';

const useStyles = makeStyles(() => ({
    section: {
        padding: "4rem",
        background: "#fff"
    },
    title: {
        textAlign: "center"
    },
    divider: {
        width: 100,
        backgroundColor: "#6B6C6B",
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

    return (
        <div className={classes.section} id="works" >
            <h1 className={classes.title}>Works</h1>
            <Divider className={classes.divider} />
            <div className={classes.cardsContainer}>
                <div className={classes.cardsWrapper}>
                    <ul className={classes.cardsItems}>
                        <CardItem
                            src={BBSImage} label="BBS-ci3"
                            text="codeigniterで作成したひと言掲示板です！"
                            siteHref=""
                            githubHref="https://github.com/igaue-takahiko/BBS-php-ci3"
                        />
                        <CardItem
                            src={COVID_19DashboardImage} label="COVID-19 ダッシュボード"
                            text="React+Redux+TypeScript+firebaseで作成したコロナダッシュボードです！"
                            siteHref="https://covid-19-dashboard-83109.web.app/"
                            githubHref="https://github.com/igaue-takahiko/COVID-19_dashboard"
                        />
                        <CardItem
                            src={MyPortfolioImage} label="my portfolio"
                            text="React+Firebaseで制作した自分のポートフォリオサイトです！"
                            siteHref="https://my-portfolio-72b13.web.app/"
                            githubHref="https://github.com/igaue-takahiko/my-portfolio"
                        />
                    </ul>
                    <ul className={classes.cardsItems}>
                        <CardItem
                            src={SNSImage} label="SNS app"
                            text="React+Redux+TypeScript+firebaseで制作したSNSアプリです！"
                            siteHref="https://twitter-app-93221.firebaseapp.com/"
                            githubHref="https://github.com/igaue-takahiko/twitter-app"
                        />
                        <CardItem
                            src={K2ShopImage} label="K2-SHOP"
                            text="前職の同僚が将来ブランドを立ち上げる時を想定したECサイト(デモ)です！React+Redux-saga+firebaseで制作しました！"
                            siteHref="https://ec-website-79387.web.app/"
                            githubHref="https://github.com/igaue-takahiko/EC-GraphQL-app"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorksSection
