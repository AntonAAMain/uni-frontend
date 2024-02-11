export const handleNumberInput = (value: string): number => {
  const parsedValue = parseInt(value);

  if (Number.isNaN(parsedValue)) return 0;
  else return parsedValue;
};
