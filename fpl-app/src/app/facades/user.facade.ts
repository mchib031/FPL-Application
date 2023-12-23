import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export class UserFacade {
  private userRepository: UserRepository = new UserRepository();

  async getUserById(userId: number): Promise<User | null> {
    return this.userRepository.getUserById(userId);
  }

  async getUserLeagues(userId: number): Promise<any> {
    return this.userRepository.getUserLeagues(userId);
  }

}
