// utils/getUserFromToken.js
import { jwtDecode } from "jwt-decode";
import { getToken } from "./helpers";

export const getUserFromToken = () => {
  try {
    const token = getToken();

    const isValidToken =
      typeof token === "string" &&
      token !== "undefined" &&
      token.split(".").length === 3;

    if (!isValidToken) {
      return null;
    }

    return jwtDecode(token);
  } catch {
    return null;
  }
};