const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Gustavo",
    email: "gustavo@example.com",
    phone: "999999999",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Jose",
    email: "jose@example.com",
    phone: "999999999",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      resolve((contacts = contacts.filter((contact) => contact.id !== id)));
    });
  }
}

module.exports = new ContactsRepository();
