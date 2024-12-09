import ApiService from '../../../shared/api/apiService.ts'
import { LoginParams, LoginResponse, RegisterParams, RegisterResponse } from '../../../shared/types/api/apiTypes.ts'

class AuthApiService extends ApiService {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  public async register(params: RegisterParams): Promise<RegisterResponse> {
    return super.create('register', params)
  }

  public async login(params: LoginParams): Promise<LoginResponse> {
    return super.create('login', params)
  }
}

export const authService = new AuthApiService('/auth')
