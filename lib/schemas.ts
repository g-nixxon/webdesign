import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'That phone number seems too long'),
  email: z.string().email('Please enter a valid email'),
  street: z.string().min(2, 'Please enter your street address'),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please select your state'),
  zip: z.string().min(5, 'Please enter a valid ZIP code').max(10),
  waterSource: z.enum(['city', 'well', 'unsure'], {
    required_error: 'Please choose a water source',
  }),
  concerns: z.array(z.string()).optional().default([]),
  contactMethod: z.enum(['phone', 'email', 'text']).default('phone'),
  notes: z.string().max(2000).optional().default(''),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional().default(''),
  subject: z.string().optional().default(''),
  message: z.string().min(10, 'Please add a little more detail'),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const concernOptions = [
  { value: 'taste', label: 'Bad taste' },
  { value: 'smell', label: 'Odor or smell' },
  { value: 'staining', label: 'Staining' },
  { value: 'scale', label: 'Hard water / scale' },
  { value: 'health', label: 'Health concerns' },
  { value: 'other', label: 'Something else' },
];

export const stateOptions = [
  { value: 'GA', label: 'Georgia' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'AL', label: 'Alabama' },
  { value: 'FL', label: 'Florida' },
];
