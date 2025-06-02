export const serviceDetails = {
  radiologie: {
    fullDescription:
      'La radiographie permet d’obtenir une image des structures internes du corps, en particulier les os. Elle est rapide, indolore et utilisée pour diagnostiquer les fractures, infections, ou anomalies osseuses.',
    uses: [
      'Fractures et traumatismes',
      'Infections pulmonaires (pneumonie)',
      'Suivi post-opératoire',
    ],
    preparation: 'Aucune préparation spécifique requise.',
    image: '/images/services/radiologie.jpg',
  },
  irm: {
    fullDescription:
      'L’Imagerie par Résonance Magnétique (IRM) utilise des champs magnétiques pour produire des images précises des organes et tissus. Elle est utile pour détecter les anomalies cérébrales, spinales et musculo-squelettiques.',
    uses: ['Cerveau et moelle épinière', 'Articulations et muscles', 'Organes internes'],
    preparation: 'Enlever tout objet métallique. À jeun dans certains cas (IRM abdominale).',
    image: '/images/services/irm.jpg',
  },
  scanner: {
    fullDescription:
      'Le scanner (ou tomodensitométrie) combine des rayons X et un ordinateur pour créer des images en coupe du corps. Il est utilisé pour détecter les tumeurs, infections, ou lésions internes.',
    uses: [
      'Tumeurs et masses suspectes',
      'Traumatismes crâniens',
      'Examens thoraciques et abdominaux',
    ],
    preparation: 'Être à jeun selon la région scannée. Injection de produit de contraste possible.',
    image: '/images/services/scanner.jpg',
  },
  echographie: {
    fullDescription:
      'L’échographie utilise des ultrasons pour visualiser les organes internes en temps réel. Non invasive, elle est largement utilisée pour la grossesse, l’abdomen, ou les vaisseaux sanguins.',
    uses: ['Suivi de grossesse', 'Examens abdominaux', 'Écho-Doppler des vaisseaux'],
    preparation: 'Boire de l’eau pour une échographie pelvienne. À jeun pour l’abdomen.',
    image: '/images/services/echographie.jpg',
  },
};
