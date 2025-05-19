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
  socialLinks 
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
import { LoaderCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(3, {
    message: "Le nom doit comporter au moins 3 caractères",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse e-mail valide",
  }),
  phone: z
    .string()
    .min(8, {
      message: "Le numéro de téléphone doit comporter au moins 8 caractères",
    })
    .regex(/^[0-9+\s()-]{8,15}$/, {
      message: "Veuillez entrer un numéro de téléphone valide",
    }),
  message: z.string().min(10, {
    message: "Le message doit comporter au moins 10 caractères",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
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
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
        variant: "default",
      });
      form.reset();
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    submitContact.mutate(data);
  }

  return (
    <div className="pt-28">
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-heading mb-6">Contactez-nous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans vos besoins d'imagerie médicale.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-light rounded-lg shadow-lg p-6 h-full">
                <h3 className="text-xl font-bold text-primary font-heading mb-4">Coordonnées</h3>
                
                <div className="flex items-start mb-4">
                  <div className="text-primary text-xl mt-1 mr-4">
                    <i className="fas fa-map-marker-alt" style={{ fontFamily: "'Font Awesome 5 Free'", fontWeight: 900 }}>📍</i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Adresse</h4>
                    <p className="text-dark">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-primary text-xl mt-1 mr-4">
                    <i className="fas fa-phone-alt" style={{ fontFamily: "'Font Awesome 5 Free'", fontWeight: 900 }}>📞</i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Téléphone</h4>
                    <p className="text-dark">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-primary text-xl mt-1 mr-4">
                    <i className="fas fa-envelope" style={{ fontFamily: "'Font Awesome 5 Free'", fontWeight: 900 }}>✉️</i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-dark">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-primary text-xl mt-1 mr-4">
                    <i className="fas fa-clock" style={{ fontFamily: "'Font Awesome 5 Free'", fontWeight: 900 }}>🕒</i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Horaires d'ouverture</h4>
                    {workingHours.map((period, index) => (
                      <p key={index} className="text-dark">
                        {period.days}: {period.hours}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-bold mb-3">Suivez-nous</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url} 
                        className="text-primary hover:text-secondary text-2xl transition-colors"
                        aria-label={`Suivez-nous sur ${link.platform}`}
                      >
                        <i className={`fab fa-${link.icon}`} style={{ fontFamily: "'Font Awesome 5 Brands'" }}>
                          {link.platform === "facebook" ? "f" : 
                           link.platform === "instagram" ? "📷" : 
                           "in"}
                        </i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <Map />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary font-heading mb-4">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-600">
                Vous avez des questions ou des préoccupations? N'hésitez pas à nous contacter et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8 text-center">
                <div className="mb-6 text-5xl text-green-500">✓</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Message envoyé avec succès</h3>
                <p className="text-lg mb-6">
                  Merci de nous avoir contacté. Notre équipe vous répondra dans les plus brefs délais.
                </p>
                <Button onClick={() => setSubmitted(false)}>Envoyer un autre message</Button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-dark font-semibold">Nom complet</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Votre nom complet"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-dark"
                                {...field}
                              />
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
                            <FormLabel className="text-dark font-semibold">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="votre.email@exemple.com"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-dark"
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
                            <FormLabel className="text-dark font-semibold">Téléphone</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Votre numéro de téléphone"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-dark"
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
                            <FormLabel className="text-dark font-semibold">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Votre message"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-dark"
                                rows={5}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
                        disabled={submitContact.isPending}
                      >
                        {submitContact.isPending ? (
                          <>
                            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <i className="far fa-envelope mr-2">📩</i> Envoyer
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
