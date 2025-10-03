import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comment from '#models/comment'
import Book from '#models/book'
import User from '#models/user'

export default class extends BaseSeeder {
  public async run() {
    const users = await User.all()
    const books = await Book.all()

    await Comment.createMany([
      {
        comment: 'J\'ai essayé de parler à ma plante en lisant ce livre mais elle n\'a pas bronché. 2/5 étoiles pour l\'absence de dialogue végétal.',
        idBook: books[0].id, // Le Petit Prince
        idUser: users[1].id  // jean_dupont (users[1] car dans ton exemple c'était idUser: 2)
      },
      {
        comment: 'Big Brother m\'a bloqué sur Instagram après avoir lu ce livre. Coïncidence ? Je ne pense pas.',
        idBook: books[1].id, // 1984
        idUser: users[2].id  // marie_martin
      },
      {
        comment: 'J\'ai lu ce livre à la plage et maintenant je suis existentialiste. Merci Camus, super les vacances.',
        idBook: books[2].id, // L'Étranger
        idUser: users[3].id  // paul_bernard
      },
      {
        comment: 'J\'ai essayé d\'aller à Poudlard mais apparemment le quai 9 3/4 n\'existe pas. J\'exige un remboursement.',
        idBook: books[3].id, // Harry Potter
        idUser: users[4].id  // sophie_dubois
      },
      {
        comment: 'Trop long. Ils auraient pu prendre un Uber pour aller au Mordor et économiser 1000 pages.',
        idBook: books[4].id, // Le Seigneur des Anneaux
        idUser: users[1].id  // jean_dupont
      },
      {
        comment: 'Depuis que j\'ai lu ce livre, je me sens supérieur aux chimpanzés. Mon chat n\'est pas impressionné.',
        idBook: books[5].id, // Sapiens
        idUser: users[2].id  // marie_martin
      },
      {
        comment: 'Plot twist : le petit prince est en fait un influenceur intergalactique. Personne ne parle de ça.',
        idBook: books[0].id, // Le Petit Prince
        idUser: users[3].id  // paul_bernard
      },
      {
        comment: 'Ce livre m\'a tellement stressé que j\'ai mangé mon téléphone. Maintenant je vis off-grid dans une forêt.',
        idBook: books[1].id, // 1984
        idUser: users[4].id  // sophie_dubois
      },
      {
        comment: 'Meursault aurait pu éviter tout ce drame avec une bonne paire de lunettes de soleil et de la crème solaire.',
        idBook: books[2].id, // L'Étranger
        idUser: users[1].id  // jean_dupont
      },
      {
        comment: 'J\'ai passé 3 heures à attendre ma lettre de Poudlard. Le facteur m\'a dit d\'arrêter de boire du café.',
        idBook: books[3].id, // Harry Potter
        idUser: users[2].id  // marie_martin
      },
      {
        comment: 'Frodon marche pendant 3 tomes alors que les aigles existent. QI de 200 ce hobbit.',
        idBook: books[4].id, // Le Seigneur des Anneaux
        idUser: users[3].id  // paul_bernard
      },
      {
        comment: 'J\'ai appris qu\'on descend tous du même poisson. Maintenant je fais des excuses à mes sushis avant de les manger.',
        idBook: books[5].id, // Sapiens
        idUser: users[4].id  // sophie_dubois
      },
      {
        comment: 'Le renard dit que l\'essentiel est invisible. Du coup j\'ai arrêté de payer mes impôts. Ils sont invisibles maintenant.',
        idBook: books[0].id, // Le Petit Prince
        idUser: users[2].id  // marie_martin
      },
      {
        comment: 'Winston devrait créer une chaîne YouTube "Big Brother Exposed". Ça marcherait en 2025.',
        idBook: books[1].id, // 1984
        idUser: users[3].id  // paul_bernard
      },
      {
        comment: 'Tolkien a inventé trois langues elfiques mais n\'a jamais expliqué où ils font caca. Grosse lacune narrative.',
        idBook: books[4].id, // Le Seigneur des Anneaux
        idUser: users[4].id  // sophie_dubois
      }
    ])
  }
}
