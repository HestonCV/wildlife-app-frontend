import * as SecureStore from "expo-secure-store";

// manages the storage and validation of user tokens for access to server endpoints
class TokenManager {
  // stores token in secure storage
  async storeToken(token) {
    try {
      await SecureStore.setItemAsync("user_token", token);
    } catch (error) {
      console.log(error);
    }
  }

  // return token from secure storage if it exists
  async getToken() {
    try {
      const token = await SecureStore.getItemAsync("user_token");
      if (token) {
        return token;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // remove token from secure storage
  async removeToken() {
    await SecureStore.deleteItemAsync("user_token");
  }

  // if token exists in secure storage, send token to server to check validity
  async validateToken() {
    try {
      const token = await SecureStore.getItemAsync("user_token");
      if (token) {
        const response = await fetch(
          "http://192.168.1.140:5000/validate_token",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.log(`HTTP Error: ${response.status}`);
          return false;
        }

        const data = await response.json();
        const authorized = data.data.authorized;
        return authorized;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

const tokenManager = new TokenManager();

export default tokenManager;
