export const setLocalStorage = (key, item) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(item));
      resolve();
    } catch (error) {
      console.log(error);
      reject(`Error setting ${key} in localStorage`);
    }
  });
};

export const getLocalStorage = key => {
  return new Promise((resolve, reject) => {
    try {
      const item = JSON.parse(localStorage.getItem(key.toString()));
      return resolve(item);
    } catch (error) {
      console.log(error);
      return reject(`Error getting ${key} from localStorage`);
    }
  });
};
export const clearLocalStorage = () => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.clear();
      return resolve();
    } catch (error) {
      console.log(error);
      return reject(`Error clearing localStorage`);
    }
  });
};

export const removeItemLocalStorage = key => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem(key.toString());
      return resolve();
    } catch (error) {
      console.log(error);
      return reject(`Error removing ${key.toString()} localStorage`);
    }
  });
};
