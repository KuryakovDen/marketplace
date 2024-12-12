export type UserRole = 'CLIENT' | 'ADMIN'

export type RegisterParams = {
  email: string;
  password: string;
  role: UserRole;
}

export type RegisterResponse = {
  message: string;
}

export type LoginParams = Omit<RegisterParams, 'role'>;

export type LoginResponse = {
  accessToken: string;
};

export type UserCredentials = RegisterParams;
