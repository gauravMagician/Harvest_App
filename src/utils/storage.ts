import EncryptedStorage from "react-native-encrypted-storage";
export const StorageKeys = {
  USER: "user",
  AUTH_TOKEN: "auth_token",
  REFRESH_TOKEN: "refresh_token",
} as const;

export const storage = {
  setToken: async (token: string) => {
    try {
      console.log("🔑 Storing Token:", token);
      await EncryptedStorage.setItem(StorageKeys.AUTH_TOKEN, token);
      const storedToken = await EncryptedStorage.getItem(
        StorageKeys.AUTH_TOKEN
      );
      console.log("✅ Token Retrieved After Storing:", storedToken);

      return true;
    } catch (error) {
      console.error("❌ Error storing token:", error);
      return false;
    }
  },

  getToken: async () => {
    try {
      return await EncryptedStorage.getItem(StorageKeys.AUTH_TOKEN);
    } catch (error) {
      console.error("Error getting token:", error);
      return null;
    }
  },

  removeToken: async () => {
    try {
      await EncryptedStorage.removeItem(StorageKeys.AUTH_TOKEN);
      return true;
    } catch (error) {
      console.error("Error removing token:", error);
      return false;
    }
  },

  async setItem(key: string, value: any) {
    try {
      await EncryptedStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Storage setItem Error:", error);
    }
  },

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const value = await EncryptedStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Storage getItem Error:", error);
      return null;
    }
  },

  async removeItem(key: string) {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (error) {
      console.error("Storage removeItem Error:", error);
    }
  },

  async clear() {
    try {
      await EncryptedStorage.clear();
    } catch (error) {
      console.error("Storage clear Error:", error);
    }
  },
};
