import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  constructor(private userRepository: UserRepository) {}

  getUserInfo(userId: number): Observable<User> {
    return this.userRepository.getUserInfo(userId);
  }

}
