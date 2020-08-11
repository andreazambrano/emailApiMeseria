var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
var smtpPassword = require('aws-smtp-credentials');

module.exports = (newOrderCtaAppToUser) => {
  var transporter = nodemailer.createTransport({
      port: 465,
  host: 'email-smtp.us-east-1.amazonaws.com',
  secure: true,
  auth: {
    user:'',
    pass: '',
  },
  debug: true
  
  });

  const mailOptions = {

    from: '"lameseria.cl"<info@andesproadventures.com>',
    to: 'andreyzf20@gmail.com',
    subject: 'Orden de compra',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
   <head>
      <style>
         .banner-color {
         background-color: #ffd200;
         }
         .title-color {
         color: #000;
         }
         .button-color {
         background-color: #000;
         }
         @media screen and (min-width: 500px) {
         .banner-color {
         background-color: #ffd200;
         }
         .title-color {
         color: #7d7c7a;
         }
         .button-color {
         background-color: black;
         }
         }
      </style>
   </head>
   <body>
      <div style="background-color:#ececec;padding:0;margin:0 auto;font-weight:200;max-width:600!important">
         <table align="center" border="0" cellspacing="0" cellpadding="0" style="table-layout:fixed;font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
            <tbody>
               <tr>
                  <td>
                     <center style="width:100%">
                        <table bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0" style="margin:0 auto;max-width:512px;font-weight:200;width:inherit;font-family:Helvetica,Arial,sans-serif" width="512" >
                           <tbody>
                    
                              <tr>
                                 <td>
                                    <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                       <tbody>
                                          <tr>
                                             <td width="100%">
                                                <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                                   <tbody>
                                                      <tr>
                                                         <td align="center" style="padding:20px 0 10px 0">
                                                            <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                                               <tbody>
                                                                      <tr>
                                                                     <td align="center" width="100%">
                                                                        
                                                                            <img src="https://www.lameseria.cl/assets/assetslameseria/img/logo.png"  border="0" alt="" / >
                                                                        </td>
                                                                     </td>
                                                                   
                                                                  </tr>
                                                                 
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                     
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                  
                                                      <tr>
                                                         <td style="padding:20px 20px 10px 20px">
                                                            <table border="0" cellspacing="0" cellpadding="0" style="font-weight:200;font-family:Helvetica,Arial,sans-serif" width="100%">
                                                               <tbody>
                                                                  <tr>
                                                                        <h3 style="font-weight: 600; padding: 0px; margin: 0px; font-size: 20px; line-height: 24px; text-align: left;" class="title-color">Orden de compra </h3>
                                                                        <h4>Hola ${newOrderCtaAppToUser.nombre}, hemos recibibo una orden de compra por el producto </h4>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 20px;text-align: left;"> <b>Producto:</b> ${newOrderCtaAppToUser.productName}</p>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 20px;text-align: left;"> <b>Cantidad:</b> ${newOrderCtaAppToUser.cantidad}</p>
                                                                        <p style="margin: 20px 20px 20px 20px;font-size: 20px;text-align: left;"> <b>Subtotal:</b> ${newOrderCtaAppToUser.subTotal}</p>
                                                                        <h4>Para confirmar la compra de nuestros productos debe realizar el pago por transferencia bancaria a los siguientes datos:
                                                                        <ul>
                                                                           <li>Banco Santander</li>
                                                                           <li>Titular: ICS servicios profesionales</li>
                                                                           <li>Cta. corriente numero: 737 34 975</li>
                                                                           <li>Rut: 76 899 155 - 3</li>
                                                                           <li>Email: lameseria.cl@gmail.com</li>
                                                                        </ul>
                                                                         </h4>
                                                                        <h4>Verifique su pago enviando la referencia de la transferencia al siguiente link: https://www.lameseria.cl/confirmacion </h4> 
                                                                        <h4>Usted ha seleccionado crear una cuenta en nuestra tienda, acceda a traves de este link: https://www.lameseria.cl/user con el usuario: ${newOrderCtaAppToUser.email} y contraseña: ${newOrderCtaAppToUser.password}</h4>
                                                                        <h4>Gracias por confiar en nosotros! Esperamos volverlo a ver pronto.</h4><br>
                                                                    <h4 style=" padding: 0px; margin: 0px; font-size: 18px; line-height: 24px; text-align: center;" class="title-color">© 2020 La meseria.   Contacto: lameseria@gmail.com</h4>
                                                                     </td>
                                                                     
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                      </tr>
                                                      <tr>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                             
                           </tbody>
                        </table>
                     </center>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </body>
</html>` 
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}
