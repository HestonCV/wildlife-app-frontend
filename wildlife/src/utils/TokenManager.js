import * as SecureStore from "expo-secure-store";

// manages the storage and validation of user tokens for access to server endpoints
class TokenManager {
  // stores token in secure storage
  async storeToken(token) {
    await SecureStore.setItemAsync("user_token", token);
  }

  // return token from secure storage if it exists
  async getToken() {
    const token = await SecureStore.getItemAsync("user_token");
    if (token) {
      return token;
    } else {
      return null;
    }
  }

  // remove token from secure storage
  async removeToken() {
    await SecureStore.deleteItemAsync("user_token");
  }

  // if token exists in secure storage, send token to server to check validity
  async validateToken() {
    const token = SecureStore.getItemAsync("user_token");
    if (token) {
      const response = await fetch("http://192.168.1.145:5000/validate_token", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      data = await response.json();
      return response.data.authorization;
    } else {
      return false;
    }
  }
}
