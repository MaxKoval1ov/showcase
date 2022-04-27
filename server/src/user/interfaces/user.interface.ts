import { Document } from 'mongoose';

export class IUser extends Document {
  readonly name: string;
  readonly password: string;
}
