import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
export interface IUserRolesDoc extends mongoose.Document {
  roleName: string;
  permissions: string[];
  isDeleted: boolean;
  isActive: boolean;
}
const userRolesSchema = new mongoose.Schema<IUserRolesDoc>(
  {
    roleName: { type: String, required: true, unique: true },
    permissions: { type: [String], default: [] },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
userRolesSchema.plugin(mongoosePaginate);
export type UserRolesModelType = mongoose.PaginateModel<IUserRolesDoc>;

export const UserRolesModel = mongoose.model<IUserRolesDoc, UserRolesModelType>(
  'UserRoles',
  userRolesSchema
);
