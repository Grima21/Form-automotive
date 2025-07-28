// Validation.js

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,}$/;
  return phoneRegex.test(phone);
};

export const validateForm = (data) => {
  const errors = [];

  if (!data.firstName.trim()) {
    errors.push({ field: "firstName", message: "El nombre es requerido" });
  }

  if (!data.lastName.trim()) {
    errors.push({ field: "lastName", message: "El apellido es requerido" });
  }

  if (!data.email || !data.email.trim()) {
    errors.push({ field: "email", message: "El email es requerido" });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: "email", message: "Ingrese un email válido" });
  }

  if (!data.phone || !data.phone.trim()) {
    errors.push({ field: "phone", message: "El teléfono es requerido" });
  } else if (!validatePhone(data.phone)) {
    errors.push({
      field: "phone",
      message: "Ingrese un número de teléfono válido",
    });
  }

  if (!data.consultationType) {
    errors.push({
      field: "consultationType",
      message: "Seleccione el tipo de consulta",
    });
  }

  if (!data.message.trim()) {
    errors.push({ field: "message", message: "El mensaje es requerido" });
  } else if (data.message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "El mensaje debe tener al menos 10 caracteres",
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const getFieldError = (errors, field) => {
  const errorObj = errors.find((error) => error.field === field);
  return errorObj ? errorObj.message : undefined;
};
