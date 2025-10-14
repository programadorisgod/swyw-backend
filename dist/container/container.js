var _DIContainer;
export class DIContainer {
  constructor() {
    this.services = new Map();
  }
  static getInstance() {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
    }
    return DIContainer.instance;
  }
  registerService(key, service) {
    this.services.set(key, service);
  }
  registerDAO(keyDao, keyDatabase, table, DaoClass) {
    const db = this.resolve(keyDatabase);
    this.services.set(keyDao, new DaoClass(table, db, 'id'));
  }
  resolve(key) {
    const service = this.services.get(key);
    if (!service) throw new Error(`Service not found: ${key.description}`);
    return service;
  }
}
_DIContainer = DIContainer;
DIContainer.instance = void 0;