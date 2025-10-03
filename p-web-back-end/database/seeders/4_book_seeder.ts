import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Book from '#models/book'
import Category from '#models/category'
import User from '#models/user'
import Writer from '#models/writer'

export default class extends BaseSeeder {
  async run() {
    const categories = await Category.all()
    const users = await User.all()
    const writers = await Writer.all()

    await Book.createMany([
      {
        title: 'Le Petit Prince',
        numberOfPages: 96,
        pdfLink: 'https://example.com/petit-prince.pdf',
        abstract: 'Un aviateur, exilé dans le désert du Sahara, rencontre un petit prince venu d\'une autre planète.',
        editor: 'Gallimard',
        editionYear: 1943,
        imagePath: '/images/petit-prince.jpg',
        idCategory: categories[0].id, // Fiction
        idWriter: writers[0].id, // Antoine de Saint-Exupéry        
        idUser: users[1].id
      },
      {
        title: '1984',
        numberOfPages: 328,
        pdfLink: 'https://example.com/1984.pdf',
        abstract: 'Dans une société totalitaire où Big Brother surveille chaque citoyen, Winston Smith tente de résister.',
        editor: 'Secker & Warburg',
        editionYear: 1949,
        imagePath: '/images/1984.jpg',
        idCategory: categories[1].id, // Science-Fiction
        idWriter: writers[1].id, // George Orwell
        idUser: users[0].id
      },
      {
        title: 'L\'Étranger',
        numberOfPages: 159,
        pdfLink: 'https://example.com/etranger.pdf',
        abstract: 'Meursault, un employé de bureau à Alger, tue un Arabe et doit affronter la justice.',
        editor: 'Gallimard',
        editionYear: 1942,
        imagePath: '/images/etranger.jpg',
        idCategory: categories[0].id, // Fiction
        idWriter: writers[2].id, // Albert Camus
        idUser: users[1].id
      },
      {
        title: 'Harry Potter à l\'école des sorciers',
        numberOfPages: 320,
        pdfLink: 'https://example.com/harry-potter-1.pdf',
        abstract: 'Harry Potter découvre qu\'il est un sorcier et entre à l\'école de magie Poudlard.',
        editor: 'Gallimard Jeunesse',
        editionYear: 1997,
        imagePath: '/images/harry-potter-1.jpg',
        idCategory: categories[2].id, // Fantasy
        idWriter: writers[3].id, // J.K. Rowling
        idUser: users[1].id
      },
      {
        title: 'Le Seigneur des Anneaux',
        numberOfPages: 1216,
        pdfLink: 'https://example.com/lotr.pdf',
        abstract: 'Frodon Sacquet doit détruire un anneau maléfique pour sauver la Terre du Milieu.',
        editor: 'Allen & Unwin',
        editionYear: 1954,
        imagePath: '/images/lotr.jpg',
        idCategory: categories[2].id, // Fantasy
        idWriter: writers[4].id, // J.R.R. Tolkien
        idUser: users[0].id
      },
      {
        title: 'Sapiens: Une brève histoire de l\'humanité',
        numberOfPages: 512,
        pdfLink: 'https://example.com/sapiens.pdf',
        abstract: 'Une exploration fascinante de l\'histoire de l\'espèce humaine depuis ses origines.',
        editor: 'Albin Michel',
        editionYear: 2011,
        imagePath: '/images/sapiens.jpg',
        idCategory: categories[3].id, // Histoire
        idWriter: writers[5].id, // Yuval Noah Harari
        idUser: users[0].id
      }
    ])
  }
}
