import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    cardItem: {
        display: "flex",
        flex: 1,
        margin: "0 1rem",
        borderRadius: 10,
        "@media only screen and (max-width: 1024px)": {
            marginBottom: "2rem"
        }
    },
    cardItemLink: {
        display: "flex",
        flexFlow: "column",
        width: "100%",
        boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)",
        WebkitFilter: "drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017))",
        filter: "drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017))",
        borderRadius: 10,
        overflow: "hidden",
        textDecoration: "none",
    },
    cardItemImg : {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "block",
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "100%",
        objectFit: "cover",
        transition: "all 0.2s linear",
        "&:hover": {
            transform: "scale(1.1)",
        }
    },
    cardItemPicWrap: {
        position: "relative",
        width: "100%",
        paddingTop: "67%",
        overflow: "hidden",
        "&::after": {
            content: "attr(data-category)",
            position: "absolute",
            bottom: 0,
            marginLeft: "10px",
            padding: "6px 16px",
            maxWidth: "calc((100%) - 60px)",
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            backgroundColor: "#242424",
            boxSizing: "border-box",
        }
    },
    cardItemInfo: {
        padding: "20px 30px 30px"
    },
    cardItemText: {
        color: "#242e48",
        fontSize: "16px",
        lineHeight: "24px",
        marginBottom: 10,
    },
    cardTextLinkTitle: {
        color: "#242424",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "22px",
    },
    cardTextLink: {
        color: "#6B6C6B",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "15px",
    },
}))

const CardItem = (props) => {
    const classes = useStyle();

    return (
        <>
            <li className={classes.cardItem} data-aos="fade-up">
                <div className={classes.cardItemLink}>
                    <figure className={classes.cardItemPicWrap} data-category={props.label}>
                        <img
                            className={classes.cardItemImg} alt="Works Images"
                            src={props.src}
                        />
                    </figure>
                    <div className={classes.cardItemInfo}>
                        <h6 className={classes.cardItemText}>{props.text}</h6>
                        <a className={classes.cardTextLinkTitle} href={props.siteHref}>
                            <p>Website</p>
                        </a>
                        <a className={classes.cardTextLink} href={props.siteHref}>
                            <p>{props.siteHref}</p>
                        </a>
                        <div className="module-spacer--extra-extra-small"></div>
                        <a className={classes.cardTextLinkTitle} href={props.githubHref}>
                            <p>Github</p>
                        </a>
                        <a className={classes.cardTextLink} href={props.githubHref}>
                            <p>{props.githubHref}</p>
                        </a>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CardItem
