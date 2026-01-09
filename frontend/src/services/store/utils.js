export const storeGet = (key) => {
  const encodedAppStore = localStorage.getItem(`edw-${key}`);
  return encodedAppStore ? JSON.parse(encodedAppStore) : null;
};

export const storeSet = (key, value) => {
  if (value !== undefined && value !== null) {
    localStorage.setItem(`edw-${key}`, JSON.stringify(value));
  } else {
    storeRemove(key);
  }
};

export const storeRemove = (key) => {
  localStorage.removeItem(`edw-${key}`);
};

export const storeClear = () => {
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("edw-")) {
        localStorage.removeItem(key);
    }
  });
};
