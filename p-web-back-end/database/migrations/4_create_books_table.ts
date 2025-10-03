import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title')
      table.tinyint('numberOfPages')
      table.string('pdfLink')
      table.text('abstract')
      table.string('editor')
      table.tinyint('editionYear')
      table.string('imagePath')

      //Déclaration des foreign keys 
      table
      .integer('idCategory')
      .unsigned()
      .references('id')
      .inTable('categories')  //quelle référence pour cerner en majuscule ou minuscule?
      .onDelete('SET NULL') //malgré suppression de livres/commentaires la catégorie est permanente 

      table
      .integer('idWriter')
      .unsigned()
      .references('id')
      .inTable('writers')
      .onDelete('SET NULL') // a checker ultérieurement (logique)

      table
      .integer('idUser')
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