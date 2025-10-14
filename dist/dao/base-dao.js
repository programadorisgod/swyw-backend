import { eq } from 'drizzle-orm';
export class BaseDao {
  constructor(table, db, idField) {
    this.table = table;
    this.db = db;
    this.idField = idField;
  }
  async findById(id) {
    const column = this.table[this.idField];
    const [result] = await this.db.select().from(this.table).where(eq(column, id));
    return result || null;
  }
  async findWhere(condition) {
    const results = await this.db.select().from(this.table).where(condition);
    return results;
  }
  async findByField(field, value) {
    const results = await this.db.select().from(this.table).where(eq(this.table[field], value));
    return results || null;
  }
  async findAll() {
    const results = await this.db.select().from(this.table);
    return results || null;
  }
  async insert(entity) {
    const [result] = await this.db.insert(this.table).values(entity).returning();
    return result;
  }
  async update(id, data) {
    await this.db.update(this.table).set(data).where(eq(this.table[this.idField], id));
  }
  async delete(id) {
    await this.db.delete(this.table).where(eq(this.table[this.idField], id));
  }
}