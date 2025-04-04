// TODO: ensure the conversion will only happen if the distance is greater than 1km

/**
 * Converts a number to kilometers if it's greater than 1000.
 *
 * @param {number} number - The number to convert.
 * @returns {string} The converted number in kilometers or the original number in meters if it's less than or equal to 1000.
 */
export const useConvertToKm = (number: number): string => {
  if (number > 1000) {
    return `${(number / 1000).toFixed(2)}km`;
  } else {
    return `${number}m`;
  }
};
