
import { User } from "../../models/user.model";

export interface AuthState {
    user:User|null;
    loading: boolean;
    error: string;
}
