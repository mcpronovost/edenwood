export const DOMAIN = import.meta.env.VITE_DOMAIN ? `${import.meta.env.VITE_PROTOCOL}://${import.meta.env.VITE_DOMAIN}` : "http://localhost:8000";

export const API_URL = import.meta.env.VITE_API ? `${import.meta.env.VITE_PROTOCOL}://${import.meta.env.VITE_API}` : "http://localhost:8000/api/v1";

export const API_HEADERS = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

export const edwEncode = (data) => {
  return JSON.stringify(data);
};

export const edwDecode = (encoded) => {
  return JSON.parse(encoded);
};