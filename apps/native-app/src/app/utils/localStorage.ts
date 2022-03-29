import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LocalStorageUtil {
  static async GetArrayValue(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? value.split(',') : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  static async GetValue(key: string) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async SaveValue(key: string, value: string) {
    try {
      return await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async RemoveValue(key: string) {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static async ClearAll() {
    await AsyncStorage.clear();
  }
}
