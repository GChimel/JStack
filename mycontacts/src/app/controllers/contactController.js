const ContactRepositoy = require("../repositories/contactsRepository");

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactRepositoy.findAll();

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

  store() {
    // Criar um novo registro
  }

  update() {
    // Atualizar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactRepositoy.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "Contact not found" });
    }

    await ContactRepositoy.delete(id);
    response.sendStatus(204);
  }
}

// Singleton -> Somente uma instância pode ser criada
module.exports = new ContactController();
