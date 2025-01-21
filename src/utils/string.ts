export const truncateWalletAddress = (
  address: string,
  startLength = 4,
  endLength = 4
): string => {
  if (!address) return "";
  if (address.length <= startLength + endLength) return address;

  const start = address.slice(0, startLength);
  const end = address.slice(-endLength);

  return `${start}...${end}`;
};
