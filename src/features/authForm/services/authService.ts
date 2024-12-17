import ApiService from '../../../shared/api/apiService.ts'
import { LoginParams, LoginResponse, RegisterParams, RegisterResponse } from '../../../shared/types/api/apiTypes.ts'

class AuthApiService extends ApiService {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  // public async register(params: RegisterParams): Promise<RegisterResponse> {
  //   return super.create('register', params)
  // }

  public async register(params: RegisterParams) {
    return super.create<RegisterResponse, RegisterParams>('register', params)
  }

  public async login(params: LoginParams) {
    return super.create<LoginResponse, LoginParams>('login', params)
  }
}

export const authService = new AuthApiService('/auth')
