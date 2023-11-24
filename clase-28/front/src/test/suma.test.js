import { describe, test, assert, it, expect } from "vitest";
import { suma } from "./suma.js";

describe("suma", () => {
  it("suma de numeros", () => {
    assert.equal(suma(1, 2), 3);
  });
  it(" suma de dos numeros en cadena ", () => {
    assert(suma("1", "2"), 3);
  });
  it(" suma de dos numeros negativos ", () => {
    expect(suma(-1, "2")).toBe(1);
  });
});
