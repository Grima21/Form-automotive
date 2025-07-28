import { ContactForm } from "./ContactForm";
export default function MainContent() {
  return (
    <>
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Necesitas ayuda con tu próximo vehículo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a encontrar el
              vehículo perfecto o resolver cualquier consulta que tengas.
              Completa el formulario y te responderemos en menos de 24 horas.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
      ;
    </>
  );
}
