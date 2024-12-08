export type UserRole = 'CLIENT' | 'ADMIN'

export type RegisterResponse = {
  email: string;
  password: string;
  role: UserRole;
}

export type RegisterParams = RegisterResponse

export type LoginParams = Omit<RegisterResponse, 'role'>;

export type LoginResponse = {
  accessToken: string;
};

export type UserCredentials = RegisterResponse;
