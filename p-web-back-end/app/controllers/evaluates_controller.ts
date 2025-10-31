import Evaluate from '#models/evaluate'
import type { HttpContext } from '@adonisjs/core/http'

export default class EvaluatesController {
  /**
   * Display a list of resource
   */
 async index({ params, response }: HttpContext) {
  const evaluates = await Evaluate.query()
    .where('book_id', params.id)   
    .preload('user')               

  return response.ok(evaluates)
}

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const evaluate = await Evaluate.query()
      .preload('book')
      .preload('user')
      .where('book_id', params.id)
      .firstOrFail()
      
      return await evaluate
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}