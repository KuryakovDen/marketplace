export type RegisterResponse = {
  email: string;
  password: string;
  role: string;
}

export type RegisterParams = RegisterResponse

export type LoginParams = Omit<RegisterResponse, 'role'>;

export type LoginResponse = {
  accessToken: string;
};
