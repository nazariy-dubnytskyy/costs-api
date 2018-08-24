import { randomBytes } from 'crypto';

export function generateToken(length = 64) {
  return new Promise((resolve, reject) => {
    randomBytes(length, (err, buffer) => {
      if (err) {
        reject(err);
      }
      resolve(buffer.toString('hex'));
    });
  });
}
