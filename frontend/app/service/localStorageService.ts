class LocalStorageService {
  static get(key: string, prop?: string) {
    const item = localStorage.getItem(key);
    if (!item) return null;

    let parsed;
    try {
      parsed = JSON.parse(item);
    } catch {
      parsed = item;
    }

    return prop ? (parsed?.[prop] ?? null) : parsed;
  }

  static set(key: string, value: string | number | boolean | object | null) {
    if (value === undefined || value === null) return;

    if (typeof value == "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, String(value));
    }
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}

export default LocalStorageService;
