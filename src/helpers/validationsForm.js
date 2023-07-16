//Validaciones

export const nameRules = [
  (v) => !!v || "El nombre es requerido",
  (v) =>
    (v && v.length >= 3 && v.length <= 100) ||
    "El nombre debe tener menos de 3 caracteres y máximo 100 caracteres",
];
//Valida que el codigo solo sea numerico
const regCodigo = /^\d{1,3}$/;
export const codRules = [
  (v) => !!v || "El código es requerido",
  (v) => (v && v.length >= 3) || "El código debe tener menos de 3 caracteres",
  (v) =>
    regCodigo.test(v) ||
    "El código debe ser numerico inferior o igual a 3 cifras",
];
//Valida que el nit solo sea numerico
const regNit = /^\d{7,10}$/;
export const nitRules = [
  (v) => !!v || "El nit es requerido",
  (v) => regNit.test(v) || "El nit debe ser numerico entre 7 y 10 cifras",
];
//Valida que el telefono solo sea numerico
const regTelefono = /^\d{7,10}$/;
export const phoneRules = [
  (v) => !!v || "El telefono es requerido",
  (v) =>
    regTelefono.test(v) || "El telefono debe ser numerico entre 7 y 10 cifras",
];
//Valida que el email sea valido
const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const emailRules = [
  (v) => !!v || "El email es requerido",
  (v) => regEmail.test(v) || "El email debe ser valido",
];
export const textRules = [
  (v) => (!!v && v && v.length >= 3) || "Campo requerido",
];
