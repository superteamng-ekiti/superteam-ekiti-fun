export const setValue = (key: string, value: string) => {
  return typeof window !== "undefined" ? localStorage.setItem(key, value) : undefined;
};

export const getValue = (key: string) => {
  return typeof window !== "undefined" ? localStorage.getItem(key) : null;
};
