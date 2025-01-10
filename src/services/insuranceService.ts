import { INSURANCE_DEFINITIONS } from '@/data/insurance/definitions';
import { PR_INSURANCE_CODE } from '@/data/insurance/prCode';
import { US_INSURANCE_CODE } from '@/data/insurance/usCode';
import { INSURANCE_PRODUCTS } from '@/data/insurance/products';

interface SearchResult {
  content: string;
  source: string;
  confidence: number;
}

export function searchInsuranceInfo(query: string): SearchResult {
  const lowercaseQuery = query.toLowerCase();
  const keywords = lowercaseQuery.split(' ').filter(word => word.length > 3);
  
  // Buscar en definiciones
  for (const [term, def] of Object.entries(INSURANCE_DEFINITIONS.general)) {
    if (lowercaseQuery.includes(term)) {
      return {
        content: `**${term}**: ${def}`,
        source: 'Definiciones Generales',
        confidence: 0.9
      };
    }
  }

  // Buscar en código de PR
  if (lowercaseQuery.includes('puerto rico') || 
      lowercaseQuery.includes('pr') || 
      lowercaseQuery.includes('ocs')) {
    for (const [chapter, content] of Object.entries(PR_INSURANCE_CODE.capitulos)) {
      if (keywords.some(word => chapter.toLowerCase().includes(word))) {
        return {
          content: `**${chapter}**\n\n${content.join('\n- ')}`,
          source: 'Código de Seguros de Puerto Rico',
          confidence: 0.85
        };
      }
    }
  }

  // Buscar en código de EEUU
  if (lowercaseQuery.includes('estados unidos') || 
      lowercaseQuery.includes('eeuu') || 
      lowercaseQuery.includes('federal')) {
    for (const [law, desc] of Object.entries(US_INSURANCE_CODE.federalLaws)) {
      if (keywords.some(word => law.toLowerCase().includes(word))) {
        return {
          content: `**${law}**: ${desc}`,
          source: 'US Insurance Regulations',
          confidence: 0.85
        };
      }
    }
  }

  // Buscar en productos
  for (const [type, info] of Object.entries(INSURANCE_PRODUCTS)) {
    if (keywords.some(word => type.includes(word))) {
      const tipos = Object.entries(info.tipos)
        .map(([name, desc]) => `- **${name}**: ${desc}`)
        .join('\n');
      return {
        content: `**Tipos de Seguro de ${type}**:\n\n${tipos}`,
        source: 'Productos de Seguros',
        confidence: 0.8
      };
    }
  }

  // Si no se encuentra información específica
  return {
    content: 'Lo siento, no encontré información específica sobre tu pregunta. ¿Podrías reformularla o ser más específico?',
    source: 'Sistema',
    confidence: 0.3
  };
}