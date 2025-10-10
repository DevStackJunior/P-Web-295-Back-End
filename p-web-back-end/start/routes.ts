/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CategoriesController from '#controllers/categories_controller'
import UsersController from '#controllers/users_controller'
import WritersController from '#controllers/writers_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import BooksController from '#controllers/books_controller'
import CommentsController from '#controllers/comments_controller'
import EvaluatesController from '#controllers/evaluates_controller'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})


router.group(() => {
  //router.resource('categories', CategoriesController).apiOnly()

  router.resource('writers', WritersController).apiOnly()

  router.resource('users', UsersController).apiOnly()

  //Page Home | 5 Livres Affichés
  router.get('/books/home', [BooksController, 'home'])

  //Page Toutes Catégories confondues | Tous les Livres Affichés
  router.group(() => {
    router.get('books', [BooksController, 'booksPerCategory'])
    
  }).prefix('categories/:category_id')
  
})

//TESTER LES RECUPERATIONS DATA -  
router.group(()=> {


  //Page Livre Détails | Description complète livre + tous les commentaires affichés par livre + toutes les évaluations par livre
  router.group(() => {
    router.get('books', [BooksController, 'show'])

  })
  router.group(() => {
    router.get('comments', [CommentsController, 'show'])
    router.get('evaluates', [EvaluatesController, 'show'])
    
  })


})

//Données affichées seulement pour les utilisateurs connectés 
router.group(() => {
  

}).use(middleware.auth())