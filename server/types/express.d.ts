// server/types/express.d.ts

import type { User as AppUser } from '../../shared/types';

declare global {
  namespace Express {
    interface User extends Omit<AppUser, 'password'> {}

    interface Request {
      user?: User;
      login(user: User, done: (err: any) => void): void;
      logout(callback: (err?: any) => void): void;
      isAuthenticated(): boolean;
    }
  }
}

export {};
