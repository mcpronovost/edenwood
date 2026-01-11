export const API_URL = "http://localhost:8000/api/v1";

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