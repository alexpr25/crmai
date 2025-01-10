export const INSURANCE_PRODUCTS = {
  vida: {
    tipos: {
      'Término': 'Cobertura por un período específico.',
      'Vida Entera': 'Cobertura de por vida con componente de ahorro.',
      'Universal': 'Seguro flexible con opciones de inversión.'
    },
    caracteristicas: [
      'Beneficio por muerte',
      'Opciones de ahorro e inversión',
      'Préstamos sobre el valor acumulado'
    ]
  },
  salud: {
    tipos: {
      'Plan Individual': 'Cobertura para una persona.',
      'Plan Familiar': 'Cobertura para toda la familia.',
      'Medicare Advantage': 'Planes para beneficiarios de Medicare.'
    },
    beneficios: [
      'Servicios preventivos',
      'Hospitalización',
      'Medicamentos recetados'
    ]
  },
  propiedad: {
    tipos: {
      'Propietarios': 'Protege la vivienda y contenido.',
      'Inquilinos': 'Protege los bienes personales del inquilino.',
      'Comercial': 'Protege negocios y propiedades comerciales.'
    },
    coberturas: [
      'Daños por incendio',
      'Robo',
      'Responsabilidad civil'
    ]
  }
};