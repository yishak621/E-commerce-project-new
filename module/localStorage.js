const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    //if its true
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
}; //JSON.parse(from strings to object)
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
}; //JSON.stringify (from object to strings)

export { getStorageItem as getStore, setStorageItem as setStore };
