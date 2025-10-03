import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title')
      table.specificType('number_of_pages', 'smallint')
      table.string('pdf_link')
      table.text('abstract')
      table.string('editor')
      table.specificType('edition_year', 'smallint')
      table.string('image_path')

      //Déclaration des foreign keys 
      table
      .integer('id_category')
      .unsigned()
      .references('id')
      .inTable('categories')  //quelle référence pour cerner en majuscule ou minuscule?
      .onDelete('SET NULL') //malgré suppression de livres/commentaires la catégorie est permanente 

      table
      .integer('id_writer')
      .unsigned()
      .references('id')
      .inTable('writers')
      .onDelete('SET NULL') // a checker ultérieurement (logique)

      table
      .integer('id_user')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE') // si on supprime le user on supprime ses livres

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}