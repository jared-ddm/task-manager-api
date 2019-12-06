const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jared.ddm@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jared.ddm@gmail.com',
        subject: 'We hope to see you again soon!',
        text: `Hi, ${name}, I just wanted to follow up and check to see why you canceled your account with us? Kind regards, Jared`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

