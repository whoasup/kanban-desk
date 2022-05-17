import type { IUser } from "./../types/IUser";
import type { LoginResponse } from "./../types/auth/LoginResponse";
import type { CreateUserResponse } from "./../types/auth/CreateUserResponse";
import type { AxiosResponse } from "axios";
import api from "../api";

export default class AuthService {
  static async create(user: IUser): Promise<AxiosResponse<CreateUserResponse>> {
    return api.post("/users/create/", user);
  }

  static async login(user: IUser): Promise<AxiosResponse<LoginResponse>> {
    return api.post("/users/login/", user);
  }
}
