/**
 * Types pour la traduction du Centre d'Imagerie Benameur
 * 
 * Chaque interface correspond à une section du fichier JSON de traduction.
 * Cela permet un typage strict et une meilleure auto-complétion dans l'éditeur.
 */

/**
 * Traductions pour la section prise de rendez-vous
 */
export interface Appointment {
  back: string;                  // Texte du bouton "Retour"
  description: string;           // Description sous le titre rendez-vous
  finalNote: string;             // Note finale après la prise de rendez-vous
  preparationDescription: string;// Description des préparations avant rendez-vous
  preparationTitle: string;      // Titre de la section préparation
  stepsDescription: string;      // Description des étapes du rendez-vous
  stepsTitle: string;            // Titre des étapes
  title: string;                 // Titre principal "Prendre rendez-vous"
}

/**
 * Traductions pour la section équipe médicale / docteurs
 */
export interface Doctors {
  section_title: string;         // Titre de la section "Notre équipe médicale"
}

/**
 * Traductions pour le pied de page (footer)
 */
export interface Footer {
  rights: string;                // Mention des droits réservés
  subtitle: string;              // Sous-titre du footer
  title: string;                 // Titre principal du footer
}

/**
 * Traductions pour les formulaires (contact, rendez-vous, etc.)
 */
export interface Form {
  back: string;                  // Texte bouton retour dans formulaire
  contactUsLabel: string;        // Label "Contactez-nous"
  email: string;                 // Mot "Email"
  emailLabel: string;            // Label champ adresse e-mail
  emailPlaceholder: string;      // Placeholder pour e-mail
  error: {                      // Messages d'erreur généraux
    message: string;
    title: string;
  };
  fastResponseDesc: string;      // Description de la réactivité
  fastResponseTitle: string;     // Titre "Réactivité"
  loading: string;               // Texte affiché lors du chargement
  message: string;               // Mot "Message"
  messageLabel: string;          // Label champ message
  messagePlaceholder: string;    // Placeholder pour message
  name: string;                  // Mot "Nom"
  nameLabel: string;             // Label champ nom complet
  namePlaceholder: string;       // Placeholder pour nom
  phone: string;                 // Mot "Téléphone"
  phoneLabel: string;            // Label champ téléphone
  phonePlaceholder: string;      // Placeholder pour téléphone
  qualityServiceDesc: string;    // Description de la qualité de service
  qualityServiceTitle: string;   // Titre "Qualité de service"
  sendButton: string;            // Texte bouton "Envoyer"
  sending: string;               // Texte affiché pendant l'envoi
  sendMessageSubtitle: string;   // Sous-titre après envoi du message
  sendMessageTitle: string;      // Titre après envoi réussi
  service: string;               // Mot "Service"
  servicePlaceholder: string;    // Placeholder sélection service
  submit: string;                // Texte bouton soumettre
  success: {                    // Messages de succès
    message: string;
    title: string;
  };
}

/**
 * Traductions pour la section hero (bannière d'accueil)
 */
export interface Hero {
  cta: string;                  // Texte du bouton d'appel à l'action
  description: string;          // Description sous le titre principal
  title: string;                // Titre principal de la page d'accueil
}

/**
 * Traductions pour la navigation principale du site
 */
export interface Nav {
  appointment: string;          // Lien "Rendez-vous"
  contact: string;              // Lien "Contact"
  home: string;                 // Lien "Accueil"
  services: string;             // Lien "Services"
  testimonials: string;         // Lien "Témoignages"
}

/**
 * Traductions pour la section informations pratiques
 */
export interface PracticalInfo {
  section_title: string;        // Titre de la section "Informations pratiques"
}

/**
 * Traductions pour la section services proposés
 */
export interface Services {
  section_title: string;        // Titre de la section "Nos services"
}

/**
 * Structure d'un témoignage étendu (auteur, rôle, texte)
 */
export interface TestimonialExtended {
  author: string;               // Nom de la personne
  role: string;                 // Rôle ou fonction (patient, médecin, etc.)
  text: string;                 // Contenu du témoignage
}

/**
 * Traductions pour la section témoignages
 */
export interface Testimonials {
  appointment: string;          // Texte promotionnel prise de rendez-vous
  care: {                      // Section "Soins attentionnés"
    points: string;            // Points clés
    text: string;              // Description
    title: string;             // Titre de la section
  };
  commitmentTitle: string;      // Titre "Engagement et transparence"
  ctaButton: string;            // Texte bouton call to action
  ctaText: string;              // Texte descriptif CTA
  ctaTitle: string;             // Titre CTA
  excellence: {                 // Section "Excellence médicale"
    points: string;            // Points clés
    text: string;              // Description
    title: string;             // Titre section
  };
  extended: TestimonialExtended[]; // Liste des témoignages détaillés
  intro: string;                // Introduction aux témoignages
  section_title: string;        // Titre global de la section témoignages
  title: string;                // Titre principal
}

/**
 * Traductions pour les notifications/toasts
 */
export interface Toast {
  errorDescription: string;     // Description en cas d'erreur
  errorTitle: string;           // Titre en cas d'erreur
  messageSentDescription: string; // Description succès envoi message
  messageSentTitle: string;     // Titre succès envoi message
}

/**
 * Interface principale combinant toutes les sections de traduction
 */
export interface Translations {
  appointment: Appointment;
  doctors: Doctors;
  footer: Footer;
  form: Form;
  hero: Hero;
  nav: Nav;
  practicalInfo: PracticalInfo;
  services: Services;
  testimonials: Testimonials;
  toast: Toast;
}
