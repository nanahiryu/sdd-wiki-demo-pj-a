import { greet } from "../src/index";

test("greet returns hello message", () => {
  expect(greet("world")).toBe("Hello, world!");
});
