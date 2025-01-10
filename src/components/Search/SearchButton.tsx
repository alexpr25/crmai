import React from 'react';
import { Send } from 'lucide-react';
import { SearchButtonProps } from '@/types/search';

export const SearchButton: React.FC<SearchButtonProps> = ({ isLoading, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
      ) : (
        <Send className="h-5 w-5" />
      )}
    </button>
  );
};