import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'admin',
        isAdmin: true,
        password: await hash.make('Admin123!')
      },
      {
        username: 'jean_dupont',
        isAdmin: false,
        password: await hash.make('Password123!')
      },
      {
        username: 'marie_martin',
        isAdmin: false,
        password: await hash.make('Password123!')
      },
      {
        username: 'paul_bernard',
        isAdmin: false,
        password: await hash.make('Password123!')
      },
      {
        username: 'sophie_dubois',
        isAdmin: false,
        password: await hash.make('Password123!')
      },
      {
        username: 'moderator',
        isAdmin: true,
        password: await hash.make('Moderator123!')
      }
    ])
  }
}