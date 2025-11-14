import { ITokenPayload } from '../helpers/jwtHelpers';
import { UserModel } from '../models/userModel';
import bcrypt from 'bcryptjs';

export const authenticateUser = async (
  email: string,
  password: string
): Promise<{}> => {
  // Placeholder logic for user authentication
  try {
    const result = await isUserValid(email, password);
    return result;
  } catch (error) {
    throw error;
  }
};

export const isUserValid = async (
  email: string,
  password: string
): Promise<{}> => {
  // Placeholder logic for user validation
  try {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return {
        code: 404,
        status: false,
        message: 'User not found, email does not exist.',
      };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        code: 401,
        status: false,
        message: 'Invalid password.',
      };
    }
    return {
      code: 200,
      status: true,
      message: 'User authenticated successfully.',
      data: {
        u_id: user._id,
        email: user.email,
        roleId: user.roleId,
      } as ITokenPayload,
    };
  } catch (error) {
    throw error;
  }
};
