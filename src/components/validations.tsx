export const validSpeciesName = (value: string) => {
  const validated = /^[a-zA-Z]{3,23}$/.test(value);
  const message = validated
    ? undefined
    : "Must be between 3 and 23 characters. No numbers or special characters allowed!";
  return { validated: validated, message: message };
};

export const validPlanetName = (value: string) => {
  const validated = /^[a-zA-Z0-9]{2,49}$/.test(value);
  const message = validated
    ? undefined
    : "Must be between 2 and 49 characters. Numbers are allowed, but no special characters.";
  return { validated: validated, message: message };
};

export const validNumberBeings = (value: string) => {
  const validated = Number.isInteger(+value) && +value >= 10 ** 9;
  const message = validated
    ? undefined
    : "Numbers ONLY. Must be at least 1,000,000,000.";
  return { validated: validated, message: message };
};

export const validCalculator = (value: string) => {
  const validated = value === "true";
  const message = validated ? undefined : '"4" must be selected.';
  return { validated: validated, message: message };
};

export const validReason = (value: string) => {
  const validated = value.length >= 17 && value.length <= 153;
  const message = validated
    ? undefined
    : "Must be between 17 and 153 characters.";
  return { validated: validated, message: message };
};
