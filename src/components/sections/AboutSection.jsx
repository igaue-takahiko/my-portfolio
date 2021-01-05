import React, { useEffect } from 'react';
import {
    makeStyles,
    Grid,
    Container,
    Typography,
    Divider,
    Avatar
} from '@material-ui/core';
import Aos from 'aos';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: "4rem",
        background: "#fff",
    },
    title: {
        textAlign: "center",
    },
    divider: {
        width: 100,
        margin: "0 auto",
        color: "#6B6C6B",
        border: "2px solid",
        borderRadius: "2px"
    },
    avatar: {
        width: theme.spacing(27),
        height: theme.spacing(27),
        margin: "0 auto",
    },
    text: {
        textAlign: "center",
        marginBottom: theme.spacing(1)
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
        <div className={classes.section}>
            <h1 className={classes.title}>About</h1>
            <Divider className={classes.divider} />
            <div className="module-spacer--medium" />
            <div className="module-spacer--medium" />
            <Container maxWidth="xl">
                <Grid container alignItems="center" justify="space-between" direction="row" spacing={3}>
                    <Grid item xs={12} md={4} data-aos="fade-right">
                        <Avatar
                            className={classes.avatar}
                            src="/images/avatar1.png"
                        />
                        <div className="module-spacer--extra-extra-small" />
                        <div className={classes.text}>
                            <Typography variant="subtitle1">伊賀上 尚彦(いがうえ たかひこ)</Typography>
                            <div className="module-spacer--extra-extra-small" />
                            <Typography variant="body1">
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
                        <Typography variant="h6" >なせエンジニアを目指すのか？</Typography>
                        <Divider style={{ width: "280px", margin: "0 auto" }} />
                        <div className="module-spacer--extra-extra-small" />
                        <Typography variant="body1">
                            今までの人生でいろんな経験をしてきてエンジニアを志す理由は、<br/>
                            『挑戦による価値を見出し、多くの人の役に立ちたい』からです！<br/>
                            出来ないことが出来る様になることは大変ですけど、<br/>
                            それ以上に自己成長することにより人の助けになるのが嬉しく思います！
                        </Typography>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={4} data-aos="fade-left">
                        <div className={classes.text}>
                        <Typography variant="h6">今後、どういう事に携わりたいか？</Typography>
                        <Divider style={{ width: "280px", margin: "0 auto" }} />
                        <div className="module-spacer--extra-extra-small" />
                        <Typography variant="body1">
                            プログラミングを学んで思うことは、形が変わっても物づくりが好きだという事です！<br/>
                            今まで携わってきて成長できた飲食、小売業界にプログラミングを通じて<br/>
                            より良いサービスを作り還元していきたいと思います！<br/>
                        </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AboutSection
