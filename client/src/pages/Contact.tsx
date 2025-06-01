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
  CheckCircle,
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
          top: document.getElementById("contact-form")?.offsetTop || 0,
          behavior: "smooth",
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
      {/* ... Sections précédentes inchangées ... */}

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
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{t("form.fastResponseTitle")}</h4>
                      <p className="text-gray-600">{t("form.fastResponseDesc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{t("form.qualityServiceTitle")}</h4>
                      <p className="text-gray-600">{t("form.qualityServiceDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
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
                          <Input
                            type="email"
                            placeholder={t("form.emailPlaceholder")}
                            {...field}
                          />
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
                        <FormLabel>{t("form.phoneLabel")}</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder={t("form.phonePlaceholder")}
                            {...field}
                          />
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
                          <Textarea
                            rows={5}
                            placeholder={t("form.messagePlaceholder")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2"
                    disabled={submitContact.status === "pending"}
                  >
                    {submitContact.status === "pending" ? (
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
