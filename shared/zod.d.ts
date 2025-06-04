import { z } from 'zod';
export declare const insertUserSchema: z.ZodEffects<z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    confirmPassword: string;
}, {
    username: string;
    password: string;
    confirmPassword: string;
}>, {
    username: string;
    password: string;
    confirmPassword: string;
}, {
    username: string;
    password: string;
    confirmPassword: string;
}>;
export declare const contactMessageSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    service: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    email: string;
    name: string;
    phone: string;
    service: string;
}, {
    message: string;
    email: string;
    name: string;
    phone: string;
    service: string;
}>;
export declare const appointmentSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    service: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<["pending", "confirmed", "cancelled"]>>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "confirmed" | "cancelled";
    email: string;
    name: string;
    phone: string;
    service: string;
    message?: string | undefined;
}, {
    email: string;
    name: string;
    phone: string;
    service: string;
    message?: string | undefined;
    status?: "pending" | "confirmed" | "cancelled" | undefined;
}>;
export declare const insertContactMessageSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    service: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    email: string;
    name: string;
    phone: string;
    service: string;
}, {
    message: string;
    email: string;
    name: string;
    phone: string;
    service: string;
}>;
export declare const insertAppointmentSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    service: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<["pending", "confirmed", "cancelled"]>>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "confirmed" | "cancelled";
    email: string;
    name: string;
    phone: string;
    service: string;
    message?: string | undefined;
}, {
    email: string;
    name: string;
    phone: string;
    service: string;
    message?: string | undefined;
    status?: "pending" | "confirmed" | "cancelled" | undefined;
}>;
