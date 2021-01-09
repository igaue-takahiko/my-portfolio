import React, { useEffect } from 'react';
import {
    makeStyles,
    Grid,
    Container,
    Typography,
    Divider,
    Avatar
} from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';
import Aos from 'aos';
import TiImage from '../../assets/images/t.i-image.jpeg';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: "4rem",
        background: "#fff",
    },
    title: {
        textAlign: "center",
    },
    subtitle: {
        '@media (max-width:600px)': {
            fontSize: '0.95rem',
        },
    },
    subtitle2: {
        textAlign: "center",
        "@media screen and (max-width: 950px)": {
            fontSize: "0.9rem",
        },
        "@media screen and (max-width: 812px)": {
            fontSize: "0.835rem",
        },
    },
    divider: {
        width: 100,
        backgroundColor: "#6B6C6B",
        margin: "0 auto",
        color: "#6B6C6B",
        border: "2px solid",
        borderRadius: "2px"
    },
    divider_m: {
        width: "12.2rem",
        margin: "0 auto",
    },
    divider_l: {
        width: "19rem",
        margin: "0 auto",
        "@media screen and (max-width: 896px)": {
            width: "13rem",
        },
        "@media screen and (max-width: 736px)": {
            width: "14rem",
        },
    },
    avatar: {
        width: theme.spacing(27),
        height: theme.spacing(27),
        margin: "0 auto",
    },
    text: {
        textAlign: "center",
        marginBottom: theme.spacing(1),
    },
    linksContainer: {
        display: "flex",
        justifyContent: "space-around",
    },
    linkItem: {
        color: "#6B6C6B",
        fontSize: "1.6rem",
        textDecoration: "none",
        "&:hover": {
            color: "#06cf6b"
        }
    }
}))

const AboutSection = () => {
    const classes = useStyles();

    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 0,
            anchorPlacement: "center-center",
        })
    },[])

    return (
        <div className={classes.section} id="about">
            <h1 className={classes.title}>About</h1>
            <Divider className={classes.divider} />
            <div className="module-spacer--medium" />
            <div className="module-spacer--medium" />
            <Container maxWidth="xl">
                <Grid container alignItems="center" justify="space-between" direction="row" spacing={3}>
                    <Grid item xs={12} md={4} data-aos="fade-right">
                        <Avatar
                            className={classes.avatar}
                            src={TiImage}
                        />
                        <div className="module-spacer--extra-extra-small" />
                        <div className={classes.text}>
                            <Typography variant="subtitle1">伊賀上 尚彦(いがうえ たかひこ)</Typography>
                            <div className="module-spacer--extra-extra-small" />
                            <Typography variant="body2">
                                1982年10月26日生まれ (現 38歳)<br/>
                                <br/>
                                --経歴--<br/>
                                23歳から主に和食を中心に約８年間、調理師修行。<br/>
                                32歳に共同経営で独立(飲食店経営)して約１年間経営し閉店。<br/>
                                33歳の時に帰郷し酒屋勤務(現在勤務)。
                                <br/>
                                <br/>
                                --現在--<br/>
                                2020年4月からプログラミングスクール「TECH I.S.」にて約半年間、主にPHPを勉強中<br/>
                                スクールと並行してJavaScript(主にReactを中心に)を独学で勉強中
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} data-aos="fade-zoom-in">
                    <div className={classes.text}>
                        <Typography className={classes.subtitle} variant="h6" >なぜエンジニアを目指すのか？</Typography>
                        <Divider className={classes.divider_l} />
                        <div className="module-spacer--extra-extra-small" />
                        <Typography variant="body2">
                            今までの人生でいろんな経験をしてきてエンジニアを志す理由は、<br/>
                            『挑戦による価値を見出し、多くの人の役に立ちたい』からです！<br/>
                            出来ないことが出来る様になることは大変ですけど、<br/>
                            それ以上に自己成長することにより人の助けになるのが嬉しく思います！
                        </Typography>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={4} data-aos="fade-left">
                        <div className={classes.text}>
                        <Typography className={classes.subtitle2} variant="h6" >今後、どういう事に携わりたいか？</Typography>
                        <Divider className={classes.divider_l} />
                        <div className="module-spacer--extra-extra-small" />
                        <Typography variant="body2">
                            プログラミングを学んで思うことは、形が変わっても物づくりが好きだという事です！<br/>
                            今まで携わってきて成長できた飲食、小売業界にプログラミングを通じて<br/>
                            より良いサービスを作り還元していきたいです！<br/>
                        </Typography>
                        </div>
                        <div className="module-spacer--medium" />
                        <div className={classes.linksContainer}>
                            <HashLink className={classes.linkItem} smooth to="/skills#skills">
                                Skills
                            </HashLink>
                            <HashLink className={classes.linkItem} smooth to="/works#works">
                                Works
                            </HashLink>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AboutSection
