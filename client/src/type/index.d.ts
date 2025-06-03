/** ----------------- SHARED TYPES ------------------ */
export type UserRole = 'admin' | 'user';
/** ----------------- AUTHOR / USER ------------------ */
export type Author = {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
    lastLogin?: string | null;
    isActive: boolean;
};
export type User = Author & {
    password: string;
};
/** ----------------- NEW USER ------------------ */
export type NewUser = {
    name: string;
    email: string;
    password: string;
};
/** ----------------- SERVICE ------------------ */
export type Service = {
    id: string | number;
    title: string;
    description: string;
    image: string;
    icon: string;
};
export type ServiceProps = Service;
/** ----------------- SERVICE DETAIL ------------------ */
export type ServiceDetail = {
    fullDescription: string;
    uses: string[];
    preparation: string;
    image: string;
};
/** ----------------- TESTIMONIAL ------------------ */
export type Testimonial = {
    id: number;
    text: string;
    author: string;
    role?: string;
    initials?: string;
    rating?: number;
    avatar?: string;
};
/** ----------------- WORKING HOUR ------------------ */
export type WorkingHour = {
    days: string;
    hours: string;
};
/** ----------------- CONTACT INFO ------------------ */
export type ContactInfo = {
    address: string;
    phone: string;
    email: string;
    location?: {
        lat: number;
        lng: number;
    };
};
/** ----------------- FEATURE ------------------ */
export type Feature = {
    icon: string;
    title: string;
    description: string;
    image?: string;
};
/** ----------------- TEAM BENEFIT ------------------ */
export type TeamBenefit = {
    icon: string;
    title: string;
    subtitle: string;
    image?: string;
};
/** ----------------- SOCIAL LINK ------------------ */
export type SocialLink = {
    platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | string;
    url: string;
    icon: string;
};
/** ----------------- HERO IMAGES ------------------ */
export type HeroImages = {
    home: string;
    services: string;
    appointment: string;
    testimonials: string;
    contact: string;
};
/** ----------------- EQUIPMENT IMAGE ------------------ */
export type EquipmentImage = {
    title: string;
    image: string;
    description?: string;
};
/** ----------------- APPOINTMENT ------------------ */
export type Appointment = {
    back: string;
    title: string;
    description: string;
    finalNote: string;
    preparationDescription: string;
    preparationTitle: string;
    preparationSubtitle: string;
    stepsTitle: string;
    stepsDescription: string;
    updateAppointmentStatus: string;
    appointment: InsertAppointment;
    appointmentStatus: {
        pending: string;
        confirmed: string;
        cancelled: string;
    };
};
export interface IVIAppointment extends Appointment {
}
export type InsertAppointment = {
    name: string;
    email: string;
    phone: string;
    service: string;
    message?: string | null;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: string;
};
/** ----------------- NEWS POST ------------------ */
export type NewsPost = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt?: string;
    authorId: number;
    status: 'draft' | 'published' | 'archived';
    author?: Author;
};
export type InsertNewsPost = {
    title: string;
    content: string;
    createdAt: string;
    authorId: number;
};
export type UpdateNewsPost = {
    id: number;
    title?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
    authorId?: number;
    status?: 'draft' | 'published' | 'archived';
};
/** ----------------- NEWS POST STATUS ------------------ */
export type NewsPostStatus = {
    id: number;
    status: 'draft' | 'published' | 'archived';
    updatedAt: string;
    postId: number;
    post?: NewsPost;
    author?: Author;
};
