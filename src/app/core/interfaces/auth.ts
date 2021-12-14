export interface UserInterface {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthResponseInterface {
  access_token: string;
}
