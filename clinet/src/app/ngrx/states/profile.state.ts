
import { Profile } from "src/app/models/profile.model";

export interface ProfileState {
    profiles: Profile[];
    profileCurrent: Profile|null;
    loading: boolean;
    error: string;
}
