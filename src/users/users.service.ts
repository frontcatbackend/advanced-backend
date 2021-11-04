import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDTO } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepo: typeof User) {
  }

  async createUser(dto:CreateUserDTO){
    const newUser = await this.userRepo.create(dto)
    return newUser
  }

  async getAllUsers(){
    const getAll = await this.userRepo.findAll()
    return getAll
  }
}
