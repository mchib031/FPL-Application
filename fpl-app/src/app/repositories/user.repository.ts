import axios from 'axios';
import { User } from '../models/user.model';

export class UserRepository {
  private baseUrl: string = 'https://fantasy.premierleague.com/api/element-summary';

  async getUserById(userId: number): Promise<User | null> {
    try {
      const response = await axios.get(`${this.baseUrl}/user-id/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  }

  async getUserLeagues(userId: number) {
    const response = await axios.get(`${this.baseUrl}/user-id/${userId}`);
    const user = response.data;

    if (user && user.leagues) {
      return user.leagues;
    }

    return null;
  }

}
