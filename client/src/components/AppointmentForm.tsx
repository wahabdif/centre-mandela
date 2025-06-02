import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { services } from '@/lib/constants';
import { useTranslation } from 'react-i18next';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LoaderCircle } from 'lucide-react';

const appointmentFormSchema = z.object({
  name: z.string().min(3, { message: 'form.errors.name' }),
  email: z.string().email({ message: 'form.errors.email' }),
  phone: z
    .string()
    .min(8)
    .regex(/^[0-9+\s()-]{8,15}$/, {
      message: 'form.errors.phone',
    }),
  service: z.string({ required_error: 'form.errors.service' }),
  message: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export default function AppointmentForm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const createAppointment = useMutation({
    mutationFn: async (data: AppointmentFormValues) => {
      const response = await apiRequest('POST', '/api/appointments', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('form.success.title'),
        description: t('form.success.message'),
        variant: 'default',
      });
      form.reset();
      setSubmitted(true);
    },
    onError: error => {
      toast({
        title: t('form.error.title'),
        description: error.message || t('form.error.message'),
        variant: 'destructive',
      });
    },
  });

  function onSubmit(data: AppointmentFormValues) {
    createAppointment.mutate(data);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8 text-center text-gray-900">
        <div className="mb-6 text-5xl text-green-500">✓</div>
        <h3 className="text-2xl font-bold text-primary mb-4">{t('form.success.title')}</h3>
        <p className="text-lg mb-6">{t('form.success.message')}</p>
        <Button onClick={() => setSubmitted(false)}>{t('form.back')}</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white text-gray-900 rounded-lg shadow-xl overflow-hidden">
      <div className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">{t('form.name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.namePlaceholder')} {...field} />
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
                  <FormLabel className="font-semibold">{t('form.email')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.emailPlaceholder')} {...field} />
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
                  <FormLabel className="font-semibold">{t('form.phone')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form.phonePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">{t('form.service')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t('form.servicePlaceholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map(service => (
                        <SelectItem key={service.id} value={service.id}>
                          {t(`services.${service.id}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">{t('form.message')}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t('form.messagePlaceholder')} rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
              disabled={createAppointment.isPending}
            >
              {createAppointment.isPending ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  {t('form.loading')}
                </>
              ) : (
                <>
                  <span className="mr-2">📩</span> {t('form.submit')}
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
