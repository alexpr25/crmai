import { QueryAnalysis } from '@/types/query';
import { InsuranceSection } from '@/types/insurance';
import { INSURANCE_MOCK_DATA } from '@/mocks/insuranceData';

export function findRelevantSections(analysis: QueryAnalysis): InsuranceSection[] {
  const { type, context, keywords } = analysis;

  // Convertir las secciones del mock en un arreglo de InsuranceSection
  const sections: InsuranceSection[] = Object.entries(INSURANCE_MOCK_DATA.sections).flatMap(([id, content]) =>
    Array.isArray(content)
      ? content.map((item, index) => ({
          id: `${id}-${index}`,
          title: id,
          content: item,
          type: id.toUpperCase(), // Asume que el ID puede representar el tipo
          context: 'GENERAL' // Valor por defecto, ajustar si hay más contextos específicos
        }))
      : []
  );

  // Buscar secciones relevantes basadas en el análisis
  const matchingSections = sections
    .filter((section: InsuranceSection) => {
      const matchesType = section.type === type || section.type === 'GENERAL';
      const matchesContext = section.context === context || section.context === 'GENERAL';
      const hasKeywordMatch = keywords.some(keyword =>
        section.content.toLowerCase().includes(keyword.toLowerCase()) ||
        section.title.toLowerCase().includes(keyword.toLowerCase())
      );

      return matchesType && matchesContext && hasKeywordMatch;
    })
    .sort((a, b) => calculateRelevance(b, analysis) - calculateRelevance(a, analysis));

  return matchingSections;
}

function calculateRelevance(section: InsuranceSection, analysis: QueryAnalysis): number {
  let score = 0;

  // Coincidencia de tipo
  if (section.type === analysis.type) score += 3;

  // Coincidencia de contexto
  if (section.context === analysis.context) score += 2;

  // Coincidencia de palabras clave
  const keywordMatches = analysis.keywords.filter(keyword =>
    section.content.toLowerCase().includes(keyword.toLowerCase()) ||
    section.title.toLowerCase().includes(keyword.toLowerCase())
  ).length;

  score += keywordMatches;

  return score;
}
