const ContactRepositoy = require("../repositories/contactsRepository");

class ContactController {
  async index(request, response) {
    // Listar todos os registros

    const { orderBy } = request.query;

    const contacts = await ContactRepositoy.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    // Mostrar um registro
    const { id } = request.params;

    const contact = await ContactRepositoy.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "Contact not found" });
    }

    return response.json(contact);
  }

  async store(request, response) {
    // Criar um novo registro
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const contactExists = await ContactRepositoy.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: "Contact already exists" });
    }

    const contact = await ContactRepositoy.create({
      name,
      email,
      phone,
      category_id,
    });

    return response.json(contact);
  }

  async update(request, response) {
    // Atualizar um registro
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactRepositoy.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: "Contact not found" });
    }

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const contactByEmailExists = await ContactRepositoy.findByEmail(email);
    if (contactByEmailExists && contactByEmailExists.id !== id) {
      return response.status(400).json({ error: "Contact already exists" });
    }

    const contact = await ContactRepositoy.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    return response.json(contact);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    await ContactRepositoy.delete(id);
    response.sendStatus(204);
  }
}

// Singleton -> Somente uma instância pode ser criada
module.exports = new ContactController();
