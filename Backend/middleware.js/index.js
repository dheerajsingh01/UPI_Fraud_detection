import { verify } from 'jsonwebtoken';
import { findById } from '../models/User';

export async function protect(req, res, next) {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized to access this route' });
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = await findById(decoded.user.id);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Not authorized to access this route' });
  }
}