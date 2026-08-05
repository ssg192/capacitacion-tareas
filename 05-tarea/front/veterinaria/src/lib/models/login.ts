import type { User } from "./user";


// endpoint POST /api/auth/login
// body: LoginRequest
// response: LoginResponse

// LoginRequest
export interface LoginRequest {
		email: string;
		password: string;
}

// LoginResponse
export interface LoginResponse {
    user: User;
}