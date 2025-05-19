import AppointmentForm from "@/components/AppointmentForm";

export default function Appointment() {
  return (
    <div className="pt-28">
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white relative">
        <div className="absolute top-6 left-6">
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center text-white hover:text-gray-200 transition-colors font-medium bg-primary/30 hover:bg-primary/40 px-3 py-1.5 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Retour
          </button>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Prendre rendez-vous</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous pour prendre rendez-vous ou pour toute demande d'information.
            </p>
          </div>
          
          <AppointmentForm />
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary font-heading mb-4">
                Comment se déroule votre rendez-vous
              </h2>
              <p className="text-lg text-gray-600">
                Nous nous efforçons de rendre votre visite aussi simple et confortable que possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-primary font-heading mb-3">Prise de rendez-vous</h3>
                <p className="text-gray-600">
                  Soumettez votre demande via notre formulaire en ligne ou appelez-nous directement.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-primary font-heading mb-3">Confirmation</h3>
                <p className="text-gray-600">
                  Notre équipe vous contactera pour confirmer la date et l'heure de votre rendez-vous.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-primary font-heading mb-3">Jour de l'examen</h3>
                <p className="text-gray-600">
                  Arrivez 15 minutes avant votre rendez-vous avec votre ordonnance et votre carte d'identité.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-light rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary font-heading mb-4">Préparation aux examens</h3>
              <p className="text-gray-600 mb-6">
                Selon le type d'examen, une préparation spécifique peut être nécessaire. Voici quelques informations générales :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">Scanner avec produit de contraste</h4>
                  <p className="text-gray-600">Jeûne de 4 heures avant l'examen. Buvez beaucoup d'eau.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">Échographie abdominale</h4>
                  <p className="text-gray-600">Jeûne de 6 heures avant l'examen. Ne pas fumer.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">IRM</h4>
                  <p className="text-gray-600">Retirez tous les objets métalliques. Informez-nous de tout implant médical.</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-gray-800 mb-2">Radiographie standard</h4>
                  <p className="text-gray-600">Aucune préparation spéciale n'est généralement requise.</p>
                </div>
              </div>
              
              <p className="mt-6 text-gray-600">
                Des instructions spécifiques vous seront fournies lors de la confirmation de votre rendez-vous.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
