import { validSpeciesName } from "./validations";
import { validPlanetName } from "./validations";
import { validNumberBeings } from "./validations";
import { validCalculator } from "./validations";
import { validReason } from "./validations";

describe.each([
  ["a", false],
  ["abc", true],
  ["abcdefghijklmnopqrstuvwx", false],
  ["abc33", false],
  ["abc$$", false],
])(`test validSpeciesName()`, (value, expected) => {
  test(`input "${value}" then returns "${expected}"`, () => {
    expect(validSpeciesName(value)).toHaveProperty("validated", expected);
  });
});

describe.each([
  ["a", false],
  ["ab", true],
  ["ab33", true],
  ["12345678901234567890123456789012345678901234567890", false],
  ["ab&&", false],
])(`test validPlanetName()`, (value, expected) => {
  test(`input "${value}" then returns "${expected}"`, () => {
    expect(validPlanetName(value)).toHaveProperty("validated", expected);
  });
});

describe.each([
  ["a", false],
  ["999999999", false],
  ["1000000000", true],
  ["1000000000.5", false],
])(`test validNumberBeings()`, (value, expected) => {
  test(`input "${value}" then returns "${expected}"`, () => {
    expect(validNumberBeings(value)).toHaveProperty("validated", expected);
  });
});

describe.each([
  ["true", true],
  ["false", false],
])(`test validCalculator()`, (value, expected) => {
  test(`input "${value}" then returns "${expected}"`, () => {
    expect(validCalculator(value)).toHaveProperty("validated", expected);
  });
});

describe.each([
  ["abcdefghijklmnop", false],
  ["abcdefghijklmnopq", true],
  [
    "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123",
    true,
  ],
  [
    "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234",
    false,
  ],
])(`test validReason()`, (value, expected) => {
  test(`input "${value}" then returns "${expected}"`, () => {
    expect(validReason(value)).toHaveProperty("validated", expected);
  });
});
