import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'admin',
        isAdmin: true,
        hashPassword: await hash.make('Admin123!')
      },
      {
        username: 'jean_dupont',
        isAdmin: false,
        hashPassword: await hash.make('Password123!')
      },
      {
        username: 'marie_martin',
        isAdmin: false,
        hashPassword: await hash.make('Password123!')
      },
      {
        username: 'paul_bernard',
        isAdmin: false,
        hashPassword: await hash.make('Password123!')
      },
      {
        username: 'sophie_dubois',
        isAdmin: false,
        hashPassword: await hash.make('Password123!')
      },
      {
        username: 'moderator',
        isAdmin: true,
        hashPassword: await hash.make('Moderator123!')
      }
    ])
  }
}