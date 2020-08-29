import { Request, Response } from 'express';

export default class UsersController {
  public create(request: Request, response: Response) {
    const { name, phone } = request.body;

    return response.json({
      name,
      phone,
    });
  }
}
