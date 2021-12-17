export interface UserInterface {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role?: boolean;
}

export interface AuthResponseInterface {
  access_token: string;
  admin?: boolean;
}
