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

  create({ name, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => {
        contact.id === id ? updatedContact : contact;
      });

      resolve(updatedContact);
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

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      resolve(contacts.find((contacts) => contacts.email === email));
    });
  }
}

module.exports = new ContactsRepository();
