// import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import User from '../database/entities/User';

class UserController {
  async index (req: Request, res: Response)  {
    return res.json(await User.find());
  }
  
  async show (req: Request, res: Response) {
    return res.json(await User.findOne(req.params.id));
  }

  async create (req: Request, res: Response) {
    const user = User.create(req.body);

    const result = await User.save(user);

    return res.json(result);
  }

  async update (req: Request, res: Response) {
    const user = await User.findOne({ where: { id: req.params.id } });

    Object.assign(user, req.body);
    await user.save();
    
    return res.send(results);
  }
}