// server.js — local dev only. On Vercel you don't need this file.
const path = require("path");
const express = require("express");
const sendSms = require("./api/send-sms.js");

const app = express();
app.use(express.json());

// Serve the page explicitly.
// Do NOT use express.static(__dirname) — it would serve api/send-sms.js too.
app.get(["/", "/my_sms_local_test.html"], (_req, res) => {
  res.sendFile(path.join(__dirname, "my_sms_local_test.html"));
});

app.post("/api/send-sms", sendSms);
app.options("/api/send-sms", sendSms);

const port = 3000;
app.listen(port, () => console.log(`Open http://localhost:${port}/`));