const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = req.body;

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;

  const data = {
    to: "samuel@skultety.dev",
    from: "noreply@skultety.dev",
    subject: `New website message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "OK" });
};
