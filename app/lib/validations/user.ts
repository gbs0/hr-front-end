import { z } from 'zod';

export const userSchema = z.object({
  first_name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  last_name: z.string().min(2, 'Sobrenome deve ter no mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  role: z.enum(['user', 'admin']).default('user'),
  phone: z.string().optional(),
});

export type UserFormData = z.infer<typeof userSchema>;
