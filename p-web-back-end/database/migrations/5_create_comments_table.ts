import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      
      table.text('comment')

      table
      .integer('id_book')
      .unsigned()
      .references('id')
      .inTable('books')
      .onDelete('CASCADE') // Si on supprime 1 livre -> le/s commentaire/s est supprimé

      table
      .integer('id_user')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE') // si on supprime le user on supprime ses commentaires

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
