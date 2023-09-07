import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type ProfileDocument = HydratedDocument<Profile>;
@Schema ()
export class Profile {
    @Prop()
    id: string;

    @Prop()
    uid: string;

    @Prop()
    phone: string;

    @Prop()
    description: string;

    @Prop()
    address: string;

    @Prop()
    avatar: string;

    @Prop()
    boD: string;

    @Prop()
    create_at: Date;

    @Prop()
    update_at: Date;
}
export const ProfileSchema = SchemaFactory.createForClass(Profile);