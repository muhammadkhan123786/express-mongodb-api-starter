import { Request, Response, NextFunction } from 'express';
import { authenticateUser } from '../services/authServices';
import { generateToken, ITokenPayload } from '../helpers/jwtHelpers';

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: 'Username and password are required' });
    }

    if (!req.body.email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const result = await authenticateUser(req.body.email, req.body.password);

    if (
      result &&
      'code' in result &&
      result.code !== 200 &&
      'message' in result
    ) {
      return res
        .status(result.code as number)
        .json({ message: result.message as string });
    }

    const token = generateToken((result as { data: ITokenPayload }).data);

    return res.json({
      message: 'Login successful',
      token,
      user: { result },
    });
  } catch (error) {
    next(error);
  }
};
