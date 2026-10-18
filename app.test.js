const http = require("http");
const server = require("./app");

test("homepage returns the expected response", async () => {
  await new Promise(resolve => server.listen(0, resolve));

  const port = server.address().port;

  const response = await new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}`, res => {
      let body = "";

      res.on("data", chunk => body += chunk);
      res.on("end", () => resolve({
        status: res.statusCode,
        body
      }));
    }).on("error", reject);
  });

  expect(response.status).toBe(200);
  expect(response.body).toContain("Hello from the AWS CI/CD pipeline!");

  await new Promise(resolve => server.close(resolve));
});
