import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface IUserDoc extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  isDeleted: boolean;
  isActive: boolean;
  roleId: mongoose.Types.ObjectId;
}

const userSchema = new mongoose.Schema<IUserDoc>(
  {
    username: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserRoles',
      required: true,
    },
  },
  { timestamps: true }
);
userSchema.plugin(mongoosePaginate);

export type UserModelType = mongoose.PaginateModel<IUserDoc>;

export const UserModel = mongoose.model<IUserDoc, UserModelType>(
  'User',
  userSchema
);
