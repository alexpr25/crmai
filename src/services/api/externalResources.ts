import { ExternalResource } from '@/types/resources';

export async function queryExternalResources(query: string): Promise<ExternalResource[]> {
  // In development, return mock data
  if (import.meta.env.DEV) {
    return getMockExternalResources(query);
  }

  try {
    const responses = await Promise.allSettled([
      queryPRInsurance(query),
      queryUSInsurance(query),
      queryFreeResources(query)
    ]);

    return responses
      .filter((response): response is PromiseFulfilledResult<ExternalResource[]> => 
        response.status === 'fulfilled'
      )
      .flatMap(response => response.value);
  } catch (error) {
    console.error('[External Resources Error]:', error);
    return [];
  }
}

function getMockExternalResources(query: string): ExternalResource[] {
  const resources = [
    {
      name: 'Oficina del Comisionado de Seguros (OCS)',
      url: 'https://ocs.pr.gov/consumidores',
      description: 'Portal oficial de la OCS con recursos para consumidores de seguros en Puerto Rico',
      relevance: 0.9
    },
    {
      name: 'NAIC Consumer Resources',
      url: 'https://content.naic.org/consumer-resources',
      description: 'Guías completas sobre seguros y recursos para consumidores',
      relevance: 0.8
    },
    {
      name: 'Insurance Information Institute',
      url: 'https://www.iii.org/insurance-basics',
      description: 'Información básica sobre seguros y guías educativas',
      relevance: 0.7
    },
    {
      name: 'USA.gov Insurance',
      url: 'https://www.usa.gov/insurance',
      description: 'Recursos gubernamentales sobre seguros en Estados Unidos',
      relevance: 0.6
    }
  ];

  // Filter and sort resources based on query relevance
  return resources
    .map(resource => ({
      ...resource,
      relevance: calculateRelevance(query, resource)
    }))
    .filter(resource => resource.relevance > 0.3)
    .sort((a, b) => b.relevance - a.relevance);
}

function calculateRelevance(query: string, resource: ExternalResource): number {
  const queryTerms = query.toLowerCase().split(' ');
  const contentTerms = `${resource.name} ${resource.description}`.toLowerCase().split(' ');
  
  const matchCount = queryTerms.reduce((count, term) => 
    count + (contentTerms.some(word => word.includes(term)) ? 1 : 0), 
    0
  );

  return Math.min(1, (matchCount / queryTerms.length) + resource.relevance * 0.5);
}