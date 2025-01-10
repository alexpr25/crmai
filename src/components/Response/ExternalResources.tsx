import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ExternalResource } from '@/types/resources';

interface ExternalResourcesProps {
  resources: ExternalResource[];
}

export const ExternalResources: React.FC<ExternalResourcesProps> = ({ resources }) => {
  if (!resources.length) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Recursos Adicionales</h3>
      <div className="space-y-3">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-base font-medium text-gray-900 flex items-center gap-2">
                  {resource.name}
                  <ExternalLink className="h-4 w-4 text-gray-500" />
                </h4>
                <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
              </div>
              <div className="ml-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {Math.round(resource.relevance * 100)}% relevante
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};