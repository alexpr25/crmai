import { useState } from 'react';
import { queryAI } from '@/services/api';
import { queryExternalResources } from '@/services/api/externalResources';
import { processInsuranceQuery } from '@/services/insuranceCode';
import { formatResponse } from '@/utils/textProcessing';
import { validateQuery, validateResponse } from '@/utils/validation';
import { getErrorMessage } from '@/utils/error';
import { ExternalResource } from '@/types/resources';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [resources, setResources] = useState<ExternalResource[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null);
    setResponse('');
    setResources([]);
    
    try {
      if (!validateQuery(query)) {
        throw new Error('La pregunta debe tener entre 3 y 500 caracteres');
      }

      setIsLoading(true);
      
      const processedQuery = processInsuranceQuery(query);
      const [aiResponse, externalResources] = await Promise.all([
        queryAI(processedQuery.query),
        queryExternalResources(query)
      ]);
      
      if (!validateResponse(aiResponse.text)) {
        throw new Error('La respuesta no es válida');
      }

      setResponse(formatResponse(aiResponse.text));
      setResources(externalResources);
      
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      console.error('[Search Error]:', error);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    query,
    setQuery,
    response,
    resources,
    isLoading,
    error,
    handleSearch
  };
};