import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import Map from "@/components/Map";
import { 
  contactInfo, 
  workingHours, 
  socialLinks,
  heroImages 
} from "@/lib/constants";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  LoaderCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Instagram, 
  Linkedin,
  CheckCircle
} from "lucide-react";

import { useTranslation } from "react-i18next";

const contactFormSchema = z.object({
  name: z.string().min(3, {
    message: "form.nameMinLength",
  }),
  email: z.string().email({
    message: "form.emailInvalid",
  }),
  phone: z
    .string()
    .min(8, {
      message: "form.phoneMinLength",
    })
    .regex(/^[0-9+\s()-]{8,15}$/, {
      message: "form.phoneInvalid",
    }),
  message: z.string().min(10, {
    message: "form.messageMinLength",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("toast.messageSentTitle"),
        description: t("toast.messageSentDescription"),
        variant: "default",
      });
      form.reset();
      setSubmitted(true);
      setTimeout(() => {
        window.scrollTo({
          top: document.getElementById('contact-form')?.offsetTop || 0,
          behavior: 'smooth'
        });
      }, 100);
    },
    onError: (error: any) => {
      toast({
        title: t("toast.errorTitle"),
        description: error?.message || t("toast.errorDescription"),
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    submitContact.mutate(data);
  }

  return (
    <div className="pt-28">
      {/* Hero Section with Map Background */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImages.contact}
            alt={t("hero.contactAlt")}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        </div>
        
        <div className="relative z-10 py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">{t("hero.contactTitle")}</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              {t("hero.contactSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Map and Contact Info Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("contact.addressTitle")}</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${contactInfo.location.lat},${contactInfo.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  {t("contact.getDirections")} →
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("contact.phoneEmailTitle")}</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                >
                  {t("contact.sendEmail")} →
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("contact.openingHoursTitle")}</h3>
                    <div className="text-gray-600">
                      {workingHours.map((period, index) => (
                        <p key={index} className="text-gray-600">
                          {period.days}: <span className="font-medium">{period.hours}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-primary text-sm font-medium">
                  {t("contact.byAppointment")}
                </div>
              </div>
            </div>
            
            {/* Map Component */}
            <Map />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  {t("form.contactUsLabel")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
                  {t("form.sendMessageTitle")}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {t("form.sendMessageSubtitle")}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t("form.fastResponseTitle")}</h4>
                      <p className="text-gray-600">{t("form.fastResponseDesc")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t("form.qualityServiceTitle")}</h4>
                      <p className="text-gray-600">{t("form.qualityServiceDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 bg-white p-8 rounded-xl shadow-md"
                  noValidate
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.nameLabel")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("form.namePlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.emailLabel")}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t("form.emailPlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />            
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("
                          <Input type="tel" placeholder={t("form.phonePlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.messageLabel")}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t("form.messagePlaceholder")} rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2"
                    disabled={submitContact.isLoading}
                  >
                    {submitContact.isLoading ? (
                      <>
                        <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                        <span>{t("form.sending")}</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        <span>{t("form.sendButton")}</span>
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
