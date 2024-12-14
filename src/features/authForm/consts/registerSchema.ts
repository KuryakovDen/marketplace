
export const registerSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 6 },
    role: { type: 'string', enum: ['CLIENT', 'ADMIN'] },
  },
  required: ['email', 'password', 'role'],
};
