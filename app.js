const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from the AWS CI/CD pipeline!\n");
});

if (require.main === module) {
  server.listen(3000, "0.0.0.0", () => {
    console.log("App running on port 3000");
  });
}

module.exports = server;
