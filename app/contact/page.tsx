"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
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
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  phone: z.string().optional(),
  projectType: z.string({
    required_error: "Veuillez sélectionner un type de projet.",
  }),
  budget: z.string({
    required_error: "Veuillez sélectionner un budget.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
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
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="section-title">Me Contacter</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ensemble et voyons comment je peux vous aider à le concrétiser.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              </form>
            </Form>
          </div> */}

          <div className="max-w-md mx-auto">

          <div>
            <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-4">Informations de contact</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">contact@studiovega.dev</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <p className="text-foreground">+33 786 444 061</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Retrouvez-moi</h2>
              <div className="flex flex-col space-y-4">
                <a href="https://github.com/GuilhemPcgn" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-secondary transition-colors">
                  <Github className="h-5 w-5 mr-3" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/guilhempcgn/" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-secondary transition-colors">
                  <Linkedin className="h-5 w-5 mr-3" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/madcat_music/" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-secondary transition-colors">
                  <Instagram className="h-5 w-5 mr-3" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
