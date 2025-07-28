// ContactForm.jsx (versión sin TypeScript)
import React, { useState } from "react";
import {
  Car,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { FormField } from "./FormField";
import { validateForm, getFieldError } from "../utilis/Validation";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  consultationType: "",
  vehicleBrand: "",
  vehicleModel: "",
  budget: "",
  message: "",
};

const consultationTypes = [
  { value: "compra", label: "Compra de vehículo" },
  { value: "venta", label: "Venta de vehículo" },
  { value: "servicio", label: "Servicio técnico" },
  { value: "financiacion", label: "Financiación" },
  { value: "seguro", label: "Seguros" },
  { value: "repuestos", label: "Repuestos y accesorios" },
  { value: "otro", label: "Otra consulta" },
];

const vehicleBrands = [
  { value: "toyota", label: "Toyota" },
  { value: "ford", label: "Ford" },
  { value: "chevrolet", label: "Chevrolet" },
  { value: "volkswagen", label: "Volkswagen" },
  { value: "nissan", label: "Nissan" },
  { value: "honda", label: "Honda" },
  { value: "hyundai", label: "Hyundai" },
  { value: "peugeot", label: "Peugeot" },
  { value: "fiat", label: "Fiat" },
  { value: "renault", label: "Renault" },
  { value: "otro", label: "Otra marca" },
];

const budgetRanges = [
  { value: "0-15000", label: "Hasta $15.000" },
  { value: "15000-30000", label: "$15.000 - $30.000" },
  { value: "30000-50000", label: "$30.000 - $50.000" },
  { value: "50000-100000", label: "$50.000 - $100.000" },
  { value: "100000+", label: "Más de $100.000" },
  { value: "no-especifica", label: "Prefiero no especificar" },
];

export const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors.some((error) => error.field === name)) {
      setErrors((prev) => prev.filter((error) => error.field !== name));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData(initialFormData);
      setIsSubmitted(false);
      setErrors([]);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center animate-in zoom-in-50 duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¡Mensaje enviado con éxito!
        </h3>
        <p className="text-gray-600 text-lg">
          Gracias por contactarnos. Nos pondremos en contacto contigo en las
          próximas 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Car className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contáctanos</h2>
        <p className="text-gray-600">
          Estamos aquí para ayudarte con todas tus necesidades automotrices
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Nombre"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          error={getFieldError(errors, "firstName")}
          placeholder="Tu nombre"
          required
        />
        <FormField
          label="Apellido"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          error={getFieldError(errors, "lastName")}
          placeholder="Tu apellido"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={getFieldError(errors, "email")}
          placeholder="tu.email@ejemplo.com"
          required
        />
        <FormField
          label="Teléfono"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          error={getFieldError(errors, "phone")}
          placeholder="+1 (555) 123-4567"
          required
        />
      </div>

      <FormField
        label="Tipo de consulta"
        name="consultationType"
        type="select"
        value={formData.consultationType}
        onChange={handleInputChange}
        error={getFieldError(errors, "consultationType")}
        placeholder="¿En qué podemos ayudarte?"
        options={consultationTypes}
        required
      />

      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          label="Marca de interés"
          name="vehicleBrand"
          type="select"
          value={formData.vehicleBrand}
          onChange={handleInputChange}
          placeholder="Seleccionar marca"
          options={vehicleBrands}
        />
        <FormField
          label="Modelo específico"
          name="vehicleModel"
          value={formData.vehicleModel}
          onChange={handleInputChange}
          placeholder="Ej: Corolla, F-150, Civic"
        />
      </div>

      <FormField
        label="Presupuesto estimado"
        name="budget"
        type="select"
        value={formData.budget}
        onChange={handleInputChange}
        placeholder="Rango de presupuesto"
        options={budgetRanges}
      />

      <FormField
        label="Mensaje"
        name="message"
        type="textarea"
        value={formData.message}
        onChange={handleInputChange}
        error={getFieldError(errors, "message")}
        placeholder="Cuéntanos más detalles sobre tu consulta..."
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando mensaje...
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <MessageSquare className="w-5 h-5" />
            Enviar mensaje
          </div>
        )}
      </button>

      <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="w-4 h-4" />
          <span className="text-sm">+1 (555) 123-AUTO</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Mail className="w-4 h-4" />
          <span className="text-sm">info@automax.com</span>
        </div>
      </div>
    </form>
  );
};
