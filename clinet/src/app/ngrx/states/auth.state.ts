
import { User } from "../../models/user.model";

export interface AuthState {
    isLogin: boolean;
    loading: boolean;
    error: string;
}
