// __tests__/html.test.js

const fs = require("fs");
const path = require("path");

// Load the HTML file content for testing
const htmlPath = path.join(__dirname, "./index.html");
const htmlContent = fs.readFileSync(htmlPath, "utf-8");

describe("HTML Testing", () => {
  test("HTML should have the correct doctype declaration", () => {
    // Check if the HTML has the correct DOCTYPE declaration
    const expectedDoctype = "<!doctype html>";
    expect(htmlContent).toMatch(expectedDoctype);
  });

  test("HTML should contain a head element", () => {
    expect(htmlContent).toContain("<head>");
  });

  test("HTML should contain a body", () => {
    expect(htmlContent).toContain("<body>");
  });
 
});
