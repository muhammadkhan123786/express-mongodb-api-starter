import jwt from 'jsonwebtoken';

import mongoose from 'mongoose';

const SECRET_KEY = process.env.JWT_SECRET!;

export interface ITokenPayload {
  u_id?: mongoose.Types.ObjectId;
  email?: string;
  roleId?: mongoose.Types.ObjectId;
  code: number;
  status: boolean;
  message: string;
}

// ✅ Generate Token
export const generateToken = (user: ITokenPayload) => {
  return jwt.sign(
    {
      u_id: user.u_id,
      email: user.email,
      role: user.roleId,
    },
    SECRET_KEY,
    { expiresIn: '1d' } // expires in 1 day
  );
};

// ✅ Verify Token
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};
