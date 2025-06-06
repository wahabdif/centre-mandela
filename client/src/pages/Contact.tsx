import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@componments/lib/queryClient";
import { useToast } from "@/componments/hooks/use-toast";
import { useTranslation } from "react-i18next";

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
  Loader,
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

// Schéma de validation
const contactFormSchema = z.object({
  name: z.string().min(3, { message: "form.nameMinLength" }),
  email: z.string().email({ message: "form.emailInvalid" }),
  phone: z
    .string()
    .regex(/^[0-9+\s()-]{8,15}$/, { message: "form.phoneInvalid" }),
  message: z.string().min(10, { message: "form.messageMinLength" }),
  id: z.number().positive({ message: "form.idPositive" }),
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
      id: 1,
    },
  });

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors de l'envoi");
      }
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
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {t("form.sendMessageTitle")}
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 bg-white p-8 rounded-xl shadow-md"
                noValidate
              >
                {/* Nom */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.nameLabel")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("form.namePlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email */}
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
                {/* Téléphone */}
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
                {/* Message */}
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
                {/* ID */}
                <FormField
                  control={form.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.idLabel")}</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder={t("form.idPlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={submitContact.status === "loading"}
                >
                  {submitContact.status === "loading"
                    ? (
                      <>
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                        {t("form.sending")}
                      </>
                    )
                    : t("form.sendButton")}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
