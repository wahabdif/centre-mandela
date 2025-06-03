import * as z from 'zod';
export declare const loginSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type LoginInput = z.infer<typeof loginSchema>;
export declare const appointmentSchema: z.ZodObject<{
    fullName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    date: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    date: string;
    email: string;
    phone: string;
    fullName: string;
    message?: string | undefined;
}, {
    date: string;
    email: string;
    phone: string;
    fullName: string;
    message?: string | undefined;
}>;
export type AppointmentInput = z.infer<typeof appointmentSchema>;
export declare const contactMessageSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    service: z.ZodString;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    phone: string;
    service: string;
    message?: string | null | undefined;
}, {
    email: string;
    name: string;
    phone: string;
    service: string;
    message?: string | null | undefined;
}>;
export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
export declare const newsPostSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    content: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: string;
    title: string;
    content: string;
}, {
    id: number;
    createdAt: string;
    title: string;
    content: string;
}>;
export type NewsPostInput = z.infer<typeof newsPostSchema>;
declare const _default: {
    loginSchema: z.ZodObject<{
        username: z.ZodString;
        password: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        username: string;
        password: string;
    }, {
        username: string;
        password: string;
    }>;
    appointmentSchema: z.ZodObject<{
        fullName: z.ZodString;
        email: z.ZodString;
        phone: z.ZodString;
        date: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        email: string;
        phone: string;
        fullName: string;
        message?: string | undefined;
    }, {
        date: string;
        email: string;
        phone: string;
        fullName: string;
        message?: string | undefined;
    }>;
    contactMessageSchema: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        phone: z.ZodString;
        service: z.ZodString;
        message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        name: string;
        phone: string;
        service: string;
        message?: string | null | undefined;
    }, {
        email: string;
        name: string;
        phone: string;
        service: string;
        message?: string | null | undefined;
    }>;
    newsPostSchema: z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
        content: z.ZodString;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        createdAt: string;
        title: string;
        content: string;
    }, {
        id: number;
        createdAt: string;
        title: string;
        content: string;
    }>;
};
export default _default;
