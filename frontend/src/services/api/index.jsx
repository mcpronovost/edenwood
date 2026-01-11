import { KEY_RAT } from "@/services/store/constants";
import { API_URL, API_HEADERS, edwEncode, edwDecode } from "./utils";
import { storeGet } from "@/services/store/utils";

class EdwApi {
  get lang() {
    return window.document.documentElement.lang;
  }

  get token() {
    return storeGet(KEY_RAT);
  }

  async request(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const headers = {
      ...API_HEADERS,
      ...options.headers,
      "Accept-Language": this.lang,
    };

    if (options.body instanceof FormData) {
      delete headers["Content-Type"];
    }

    if (this.token) {
      headers.Authorization = `Edw ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        let errorMsg = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMsg = JSON.stringify(errorData);
        } catch (err) {
          errorMsg = `HTTP error! status: ${response.status}`;
        }
        throw new Error(errorMsg);
      }

      if (response.status === 204) {
        return {
          success: true,
        };
      }

      const data = await response.json();
      return {
        success: true,
        ...data,
      };
    } catch (err) {
      throw err;
    }
  }

  get(endpoint) {
    return this.request(endpoint, { method: "GET" });
  }

  post(endpoint, data) {
    const body = data instanceof FormData ? data : JSON.stringify(data);
    return this.request(endpoint, {
      method: "POST",
      body,
    });
  }

  put(endpoint, data) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  patch(endpoint, data) {
    const body = data instanceof FormData ? data : JSON.stringify(data);
    return this.request(endpoint, {
      method: "PATCH",
      body,
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: "DELETE" });
  }

  async login(data) {
    const result = await this.post("/auth/login/", data);
    return result;
  }

  async logout() {
    const result = await this.post("/auth/logout/");
    return result;
  }

  async getCurrentUser() {
    const result = await this.get("/auth/me/");
    return result;
  }
}

export const api = new EdwApi();
export { edwEncode, edwDecode };