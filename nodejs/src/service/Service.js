class Service {
  constructor(model) {
    this.model = new model();
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findById(id);
  }

  async save(entity) {
    return await this.model.save(entity);
  }

  async remove(id) {
    return await this.model.remove(id);
  }

}

module.exports = Service;