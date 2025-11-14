import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
export interface IPersonDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  isDeleted: boolean;
  isActive: boolean;
}
const personSchema = new mongoose.Schema<IPersonDoc>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);
personSchema.plugin(mongoosePaginate);
export type PersonModelType = mongoose.PaginateModel<IPersonDoc>;
export const PersonModel = mongoose.model<IPersonDoc, PersonModelType>(
  'Person',
  personSchema
);
