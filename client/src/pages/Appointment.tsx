import AppointmentForm from "@/components/AppointmentForm";
import { useTranslation } from "react-i18next";

export default function Appointment() {
  const { t } = useTranslation();

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
            {t("appointment.back")}
          </button>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">
              {t("appointment.title")}
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              {t("appointment.description")}
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
                {t("appointment.stepsTitle")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("appointment.stepsDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["step1", "step2", "step3"].map((step, index) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">{index + 1}</div>
                  <h3 className="text-xl font-bold text-primary font-heading mb-3">{t(`appointment.${step}.title`)}</h3>
                  <p className="text-gray-600">{t(`appointment.${step}.desc`)}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-light rounded-lg p-8">
              <h3 className="text-xl font-bold text-primary font-heading mb-4">
                {t("appointment.preparationTitle")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("appointment.preparationDescription")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["scanner", "echographie", "irm", "radio"].map((item) => (
                  <div key={item} className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold text-gray-800 mb-2">{t(`appointment.${item}.title`)}</h4>
                    <p className="text-gray-600">{t(`appointment.${item}.desc`)}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-gray-600">
                {t("appointment.finalNote")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
