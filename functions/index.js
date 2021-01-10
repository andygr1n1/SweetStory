const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const {email, password} = require('./config');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password,
    }
})

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
    const x = [];
    data.order.forEach(item => x.push(item));
    const options = {
        from: `Andy's SweetStory <${email}>`,
        to: data.email,
        subject: `SweetStory order has been paid. Thank you.`,
        html: `
            <div style="display: flex; flex-direction: column;">
                <div style="margin: 0 auto">
                    <h1 style="color: red; text-align: center">Sweet Story</h1>
                    <h2 style="color: black; text-align: center">Hello dear ${data.clientName}</h2>
                    <h3 style="color: black; text-align: center">Your Order:</h3>
                    <table style="background: burlywood; padding: 5px; border: 1px solid black;">
                        <tr>
                            <td style="font-weight: bolder; text-align: left">Name</td>
                            <td style="font-weight: bolder; text-align: center">Amount</td>
                            <td style="font-weight: bolder; text-align: center">Price - USD</td>
                        </tr>
                        ${
                            data.order.map(({name, count, price, choice, fComponents, topping }) =>  {
                               const $choice = choice ? `<li style="margin: 0; padding: 0">${choice}</li>` : "";
                               const $topping = topping ? `<li style="margin: 0; padding: 0">${topping}</li>` : "";
                               const $fComponents = fComponents ? `<li style="margin: 0; padding: 0">${fComponents.join(", ")}</li>`  : "";
                            return(
                            `<tr>
                             <td>${name}
                                 <ul>
                                    ${$choice}
                                    ${$topping}
                                    ${$fComponents}
                                 </ul>
                             </td>
                             <td style="text-align: center; vertical-align: top">${count}</td>
                             <td style="text-align: center;  vertical-align: top">${price}</td>
                             </tr>`
                            )}).join(" ")}
                          <tr>
                            <td style="font-weight: bolder; text-align:">Total:</td>
                            <td style="font-weight: bolder; text-align: center">${data.order.reduce((sum, item) =>
                                                                                Number(sum) + (Number(item.count)), 0)}
                            </td>
                            <td style="font-weight: bolder; text-align: center">${ Math.trunc(data.order.reduce((sum, item) =>
                                                                                sum + (item.price * item.count), 0))}
                            </td>
                          </tr>
                    </table>
                    <div style="padding: 13px; text-align: center; font-size: 10px; color: red">Good Luck ♥</div>
                </div>
            </div>
        `,
    };
    transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => sendOrderEmail(order.val()));
