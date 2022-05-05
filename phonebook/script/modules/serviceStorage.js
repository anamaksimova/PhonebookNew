const getStorage = (key) => {
  let data = [];
  if (JSON.parse(localStorage.getItem(key)) != null) {
    data = JSON.parse(localStorage.getItem(key));
  }
  return data;
};


const setStorage = (key, contact) => {
  const data = getStorage(key);
  data.push(contact);
  localStorage.setItem(key, JSON.stringify(data));
};

const removeStorage = (key, title) => {
  const contacts = getStorage(title);
  for (let index = 0; index < contacts.length; index++) {
    const {name: firstName, surname, phone} = contacts[index];
    if (phone === key) {
      contacts.splice(index, 1);
    }
  }

  localStorage.setItem(title, JSON.stringify(contacts));
};

export default {
  getStorage,
  setStorage,
  removeStorage,
};
