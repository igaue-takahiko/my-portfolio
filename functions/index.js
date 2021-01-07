const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email

const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

const adminContents = (data) => {
    return `以下内容でお問い合わせを受けました。
    お名前： ${data.name}
    メールアドレス： ${data.email}
    内容：${data.content}
    `;
}

exports.sendEmail = functions.https.onCall(async (data, context) => {
    let adminMail = {
        from: gmailEmail,
        to: adminEmail,
        subject: "お問い合わせ",
        text: adminContents(data)
    };
    try {
        await mailTransport.sendMail(adminMail)
    } catch (error) {
        console.error(`send failed. ${error}`);
        throw new functions.https.HttpsError("internal", "send failed")
    }
})
