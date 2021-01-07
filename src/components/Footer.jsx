import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Divider,
    ThemeProvider,
    createMuiTheme,
    Button,
    Backdrop,
    CircularProgress,
    Snackbar,
    Typography,
    IconButton
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Alert } from '@material-ui/lab';
import { grey } from '@material-ui/core/colors';

import { functions } from '../firebase';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: "#242424",
        padding: "4rem 0 2rem 0",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    formContainer: {
        width: 380,
        textAlign: "center",
    },
    title: {
        textAlign: "center",
        color: "#fff",
    },
    divider: {
        width: 120,
        margin: "0 auto",
        color: "#6B6C6B",
        border: "2px solid",
        borderRadius: "2px"
    },
    text: {
        color: "#fff"
    },
    textField: {
        backgroundColor: "#fff",
        borderRadius: 4,
        display: "flex"
    },
    textFieldContent: {
        backgroundColor: "#fff",
        borderRadius: 4,
    },
    error: {
        color: "#f85858",
        textAlign: "center",
        margin: 5,
    },
    contactButton: {
        backgroundColor: theme.palette.grey["300"],
        fontSize: 20,
        height: 48,
        width: 240,
        borderBottom: 16,
        "&:hover": {
            backgroundColor: "#fff",
            color: "#06cf6b",
        }
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    twitterIcon: {
        color: "#14e6f8"
    }
}));

const theme = createMuiTheme({
    palette: {
        primary: grey,
    }
})

const Footer = () => {
    const classes = useStyles();

    const [ sendData, setSendData ] = useState({
        email: "",
        name: "",
        content: "",
    });
    const [ loading, setLoading ] = useState(false);
    const [ snackbarOpen, setSnackbarOpen ] = useState(false);
    const [ snackbarInfo, setSnackbarInfo ] = useState({
        severity: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        let sendEmail = functions.httpsCallable("sendEmail");
        sendEmail(sendData).then(() => {
            setSnackbarInfo({
                severity: "success",
                message: "お問い合わせありがとうございます。送信完了しました！"
            });
            setSnackbarOpen(true);
            setSendData({
                email: "", name: "", content: "",
            });
        }).catch((error) => {
            setSnackbarInfo({
                severity: "error",
                message: "送信に失敗しました。時間を開けて再度お試しください！"
            });
            setSnackbarOpen(true);
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
    };

    const handleChange = e => {
        setSendData({ ...sendData, [e.target.name]: e.target.value });
    };

    const handleSnackBerClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <div className={classes.footerContainer}>
            <h1 className={classes.title}>Contact</h1>
            <Divider className={classes.divider} />
            <div className="module-spacer--medium" />
            <div className={classes.formContainer}>
                <Typography className={classes.text} variant="inherit" >
                    お仕事の依頼など御用の方は、<br/>
                    メール又はTwitterのDMにお問い合わせください。
                </Typography>
                <form onSubmit={handleSubmit}>
                    <ThemeProvider theme={theme}>
                        <TextField
                            className={classes.textField} type="text" label="お名前"
                            required size="small" name="name" fullWidth margin="normal"
                            value={sendData.name} onChange={handleChange}
                        />
                        <TextField
                            className={classes.textField} type="email" label="メールアドレス"
                            required size="small" name="email" fullWidth margin="normal"
                            value={sendData.email} onChange={handleChange}
                        />
                        <TextField
                            className={classes.textField} label="お問い合わせ内容" margin="normal"
                            required multiline name="content" rows="8" variant="outlined" fullWidth
                            value={sendData.content} onChange={handleChange}
                        />
                    </ThemeProvider>
                    <div className="module-spacer--medium" />
                    <Button
                        className={classes.contactButton} type="submit" variant="contained"
                    >
                        Contact
                    </Button>
                    <Backdrop className={classes.backdrop} open={loading}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackBerClose}>
                        <Alert onClose={handleSnackBerClose} security={snackbarInfo.severity}>
                            {snackbarInfo.message}
                        </Alert>
                    </Snackbar>
                </form>
                <div className="module-spacer--extra-small" />
                <IconButton className={classes.twitterIcon} href="http://twitter.com/takahiko_igaue" >
                    <TwitterIcon style={{ fontSize: 35 }} /> @takahiko_igaue
                </IconButton>
            </div>
        </div>
    )
}

export default Footer
