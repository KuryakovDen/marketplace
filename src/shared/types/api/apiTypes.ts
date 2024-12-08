export type RegisterResponse = {
  email: string;
  password: string;
  role: string;
}

export type LoginResponse = Omit<RegisterResponse, 'role'>;
