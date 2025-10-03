import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Evaluate from '#models/evaluate'
import Book from '#models/book'
import User from '#models/user'

export default class extends BaseSeeder {
  public async run() {
    const users = await User.all()
    const books = await Book.all()

    await Evaluate.createMany([
      {
        note: 5,
        idBook: books[0].id, // Le Petit Prince
        idUser: users[0].id  // jean_dupont
      },
      {
        note: 1,
        idBook: books[1].id, // 1984
        idUser: users[2].id  // marie_martin
      },
      {
        note: 3,
        idBook: books[2].id, // L'Étranger
        idUser: users[3].id  // paul_bernard
      },
      {
        note: 0,
        idBook: books[3].id, // Harry Potter
        idUser: users[4].id  // sophie_dubois
      },
      {
        note: 2,
        idBook: books[4].id, // Le Seigneur des Anneaux
        idUser: users[1].id  // jean_dupont (même user que users[0] ? ici users[1] pour varier)
      },
      {
        note: 4,
        idBook: books[5].id, // Sapiens
        idUser: users[2].id  // marie_martin
      },
      {
        note: 3,
        idBook: books[0].id, // Le Petit Prince
        idUser: users[3].id  // paul_bernard
      },
      {
        note: 1,
        idBook: books[1].id, // 1984
        idUser: users[4].id  // sophie_dubois
      },
      {
        note: 4,
        idBook: books[2].id, // L'Étranger
        idUser: users[1].id  // jean_dupont
      },
      {
        note: 2,
        idBook: books[3].id, // Harry Potter
        idUser: users[2].id  // marie_martin
      },
      {
        note: 1,
        idBook: books[4].id, // Le Seigneur des Anneaux
        idUser: users[3].id  // paul_bernard
      },
      {
        note: 5,
        idBook: books[5].id, // Sapiens
        idUser: users[4].id  // sophie_dubois
      },
      {
        note: 0,
        idBook: books[0].id, // Le Petit Prince
        idUser: users[2].id  // marie_martin
      },
      {
        note: 3,
        idBook: books[1].id, // 1984
        idUser: users[3].id  // paul_bernard
      },
      {
        note: 2,
        idBook: books[4].id, // Le Seigneur des Anneaux
        idUser: users[4].id  // sophie_dubois
      }
    ])
  }
}
