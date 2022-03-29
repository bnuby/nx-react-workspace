export default class LocalStorageUtil {
  static GetArrayValue(key: string) {
    const value = window.localStorage.getItem(key);
    return value ? value.split(',') : [];
  }
  static GetValue(key: string) {
    return window.localStorage.getItem(key);
  }

  static SaveValue(key: string, value: string) {
    return window.localStorage.setItem(key, value);
  }

  static RemoveValue(key: string) {
    return window.localStorage.removeItem(key);
  }

  static ClearAll() {
    window.localStorage.clear();
  }
}
