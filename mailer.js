require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOptions = {
    from: 'juicekimimaru@gmail.com',
    to: 'juicekimimaru@gmail.com',
    subject: 'Форма консультации с сайта',
    text: 'Форма:  Имя Фамилия Отчество Номер Специальность/профессия '


}

transporter.sendMail(mailOptions)