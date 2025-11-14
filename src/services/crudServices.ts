import { FilterQuery, Model, Document, PaginateModel } from 'mongoose';
import { PaginatedResult, Params } from '../interfaces/generalInterface';

//Generic service to get paginated data with search functionality
export const getPaginatedDataService = async <T>(
  model: PaginateModel<T>,
  { page, limit, search, searchField, sort }: Params<T>
): Promise<PaginatedResult<T>> => {
  let query: FilterQuery<T> = { isDeleted: false } as FilterQuery<T>;
  if (search && searchField?.length) {
    query.$or = searchField.map((field) => ({
      [field]: { $regex: search, $options: 'i' },
    })) as FilterQuery<T>[];
  }
  const options = { page, limit, sort: { createdAt: sort } };
  return await model.paginate(query, options);
};

//Generic service to save a new document
export const saveDocumentService = async <T extends Document>(
  model: Model<T>,
  documentData: Partial<T>
): Promise<T> => {
  try {
    const newDocument = new model(documentData);
    return await newDocument.save();
  } catch (error) {
    console.log('Error from service to save document data: ', error);
    throw error;
  }
};

//Generic service to update a document by ID
export const updateDocumentService = async <T extends Document>(
  model: Model<T>,
  id: string,
  data: Partial<T>
): Promise<T | null> => {
  try {
    const updatedDocument = await model.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return updatedDocument;
  } catch (error) {
    console.log('Error from update document service: ', error);
    throw error;
  }
};
//Generic service to soft delete a document by ID
export const softDeleteDocumentService = async <T extends Document>(
  model: Model<T>,
  id: string
): Promise<T | null> => {
  try {
    const deletedDocument = await model.findByIdAndUpdate(
      id,
      { $set: { isDeleted: true } } as any,
      { new: true }
    );
    return deletedDocument;
  } catch (error) {
    console.log('Error from soft delete document service: ', error);
    throw error;
  }
};
