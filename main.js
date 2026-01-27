const http = require("http");
const server = http.createServer((req, res) => {
  const { url, method } = req;
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello</title><head>");
  res.write("<body><center><h1>Sina Saniei</h1></center></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
