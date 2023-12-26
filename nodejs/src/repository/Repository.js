class Repository {
  constructor(model) {
    this.model = model;
    this.modelName = model.collection.name;
    this.modelSchema = model.schema;
  }

  async findAll() {
    let list = await this.model.find();
    return list;
  }

  async findById(id) {
    let one = await this.model.findById(id);
    return one;
  }

  async save(entity) {
    if (entity._id !== null) {
      return await this.model.findByIdAndUpdate({ _id: entity._id }, entity, { returnDocument: 'after' }, { returnOriginal: false });
    }
    delete entity._id;
    return await this.model.create(entity);
  }

  async remove(id) {
    await this.model.findByIdAndDelete(id);
  }

}

module.exports = Repository;