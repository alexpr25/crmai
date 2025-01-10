import { QueryAnalysis } from '@/types/query';
import { InsuranceSection } from '@/types/insurance';
import { INSURANCE_MOCK_DATA } from '@/mocks/insuranceData';

export function findRelevantSections(analysis: QueryAnalysis): InsuranceSection[] {
  const { type, context, keywords } = analysis;
  
  // Buscar secciones que coincidan con el tipo y contexto de la pregunta
  const matchingSections = INSURANCE_MOCK_DATA.sections
    .filter(section => {
      const matchesType = section.type === type || section.type === 'GENERAL';
      const matchesContext = section.context === context || section.context === 'GENERAL';
      const hasKeywordMatch = keywords.some(keyword => 
        section.content.toLowerCase().includes(keyword) ||
        section.title.toLowerCase().includes(keyword)
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
    section.content.toLowerCase().includes(keyword) ||
    section.title.toLowerCase().includes(keyword)
  ).length;
  
  score += keywordMatches;
  
  return score;
}