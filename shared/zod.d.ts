import * as z from 'zod';
export declare const loginSchema: any;
export type LoginInput = z.infer<typeof loginSchema>;
export declare const appointmentSchema: any;
export type AppointmentInput = z.infer<typeof appointmentSchema>;
export declare const contactMessageSchema: any;
export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
export declare const newsPostSchema: any;
export type NewsPostInput = z.infer<typeof newsPostSchema>;
declare const _default: {
    loginSchema: any;
    appointmentSchema: any;
    contactMessageSchema: any;
    newsPostSchema: any;
};
export default _default;
