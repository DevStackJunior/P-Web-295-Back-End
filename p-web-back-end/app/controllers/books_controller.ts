import Book from '#models/book'
import type { HttpContext } from '@adonisjs/core/http'

export default class BooksController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const book = await Book.query()
    .preload('writer')
    .preload('user')
    .preload('category')

    return await book
  }

  /**
   * Display form to create a new record
   */
  //async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  // async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {

    const book = await Book.query()
    .preload('writer')
    .preload('user')
    .preload('category')
    .where('id', params.id)
    .firstOrFail()

    return await book
  }

  async home({ }: HttpContext) {

    const book = await Book.query()
    .orderBy('created_at','desc')
    .limit(5)
    .preload('writer')
    .preload('user')
    .preload('category')    

    return await book
  }

  async booksPerCategory({ params, response }: HttpContext) {

    const books = await Book.query().where('category_id' , params.category_id)
    .preload('writer')
    .preload('user')
    .preload('category')

    return response.ok(books)
  }

  /**
   * Show Books noted per user
   */
  async showPerUser({}: HttpContext) {

  }
async store({ request, auth, response }: HttpContext) {
  //const user = auth.user!
  const data = request.only(['title','number_of_pages','pdf_link','abstract','editor','edition_year','image_path','category_id','writer_id'])
  const book = await Book.create({
    ...data,
    //userId: user.id, 
  })

  return response.created(book)
}
/////////////////////////////////////////////////////
async update({ params, request, response }: HttpContext) {
  const book = await Book.findOrFail(params.id)
  const data = request.only(['title','number_of_pages','pdf_link','abstract','editor','edition_year','image_path','category_id','writer_id'])
  book.merge(data)
  await book.save()
  return response.ok(book)
}
async destroy({ params, auth, response }: HttpContext) {
  //const user = auth.user!
  const book = await Book.findOrFail(params.id)
  await book.delete()
  return response.ok({ message: 'Livre supprimé avec succès.' })
}
}