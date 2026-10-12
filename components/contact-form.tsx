"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }).max(100, {
    message: "Le nom est trop long.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }).max(254, {
    message: "L'email est trop long.",
  }),
  phone: z.string().max(30, {
    message: "Le numéro de téléphone est trop long.",
  }).optional(),
  projectType: z.enum(["site-vitrine", "e-commerce", "application", "refonte", "autre"], {
    required_error: "Veuillez sélectionner un type de projet.",
  }),
  budget: z.enum(["< 1000", "1000-3000", "3000-5000", "5000-10000", "> 10000"], {
    required_error: "Veuillez sélectionner un budget.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }).max(5000, {
    message: "Le message est trop long.",
  }),
  // Honeypot anti-spam : champ caché pour les visiteurs humains, non validé
  // ici volontairement. Un bot qui le remplit déclenche un rejet silencieux
  // côté serveur (voir app/api/contact/route.ts) plutôt qu'une erreur visible.
  website: z.string().optional(),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: undefined,
      budget: undefined,
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 429) {
        toast({
          title: "Trop de messages envoyés",
          description: "Merci de patienter un peu avant de réessayer.",
          variant: "destructive",
        });
        return;
      }

      if (!response.ok) throw new Error("Erreur lors de l'envoi du message.");

      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot anti-spam : invisible et ignoré par les visiteurs humains */}
        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir ce champ</label>
          <input
            type="text"
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...form.register("website")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet</FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="votre@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone (optionnel)</FormLabel>
                <FormControl>
                  <Input placeholder="+33 6 12 34 56 78" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de projet</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un type de projet" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="site-vitrine">Site vitrine</SelectItem>
                    <SelectItem value="e-commerce">Site e-commerce</SelectItem>
                    <SelectItem value="application">Application web</SelectItem>
                    <SelectItem value="refonte">Refonte de site</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget estimatif</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une fourchette de budget" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="< 1000">Moins de 1 000€</SelectItem>
                  <SelectItem value="1000-3000">1 000€ - 3 000€</SelectItem>
                  <SelectItem value="3000-5000">3 000€ - 5 000€</SelectItem>
                  <SelectItem value="5000-10000">5 000€ - 10 000€</SelectItem>
                  <SelectItem value="> 10000">Plus de 10 000€</SelectItem>
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
              <FormLabel>Votre message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Décrivez votre projet, vos besoins, et tout ce qui pourrait m'aider à comprendre votre demande."
                  className="min-h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </Button>

        <p className="text-xs text-muted-foreground">
          Les informations transmises via ce formulaire servent uniquement à répondre à votre
          demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins. Voir la{" "}
          <a href="/rgpd" className="underline hover:text-secondary">
            politique de confidentialité
          </a>
          .
        </p>
      </form>
    </Form>
  );
}
