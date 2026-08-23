function resolveStorageAvailability(storage) {
  if (!storage) {
    return null;
  }

  try {
    const testKey = "__vf_chatbot_storage_test__";
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return storage;
  } catch (error) {
    return null;
  }
}

function resolveStorage(config = {}) {
  if (typeof window === "undefined") {
    return null;
  }

  const useLocalStorage = config.persistence_storage === "localStorage";
  const primaryStorage = useLocalStorage
    ? window.localStorage
    : window.sessionStorage;
  const fallbackStorage = useLocalStorage
    ? window.sessionStorage
    : window.localStorage;

  return (
    resolveStorageAvailability(primaryStorage) ||
    resolveStorageAvailability(fallbackStorage)
  );
}

function createStorageAdapter(config = {}) {
  const storage = resolveStorage(config);

  return {
    getItem(key) {
      if (!storage) {
        return null;
      }
      return storage.getItem(key);
    },

    setItem(key, value) {
      if (!storage) {
        return;
      }
      storage.setItem(key, value);
    },

    removeItem(key) {
      if (!storage) {
        return;
      }
      storage.removeItem(key);
    }
  };
}

export { createStorageAdapter };
