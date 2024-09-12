export const capitalizeFirstLetter = (str: string | null): string =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
