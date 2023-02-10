import { validSpeciesName } from "./validations";

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

// describe.each([
//   ["a", false],
//   ["ab", false],
//   ["abc", true],
// ])(`test validPlanetName()`, (value, expected) => {
//   test(`input "${value}" then returns "${expected}"`, () => {
//     expect(validSpeciesName(value)).toHaveProperty("validated", expected);
//   });
// });
