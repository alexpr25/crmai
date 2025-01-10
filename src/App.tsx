import React from 'react';
import { Header } from '@/components/Layout/Header';
import { SearchBar } from '@/components/Search/SearchBar';
import { SearchButton } from '@/components/Search/SearchButton';
import { ResponseDisplay } from '@/components/Response/ResponseDisplay';
import { ExternalResources } from '@/components/Response/ExternalResources';
import { ErrorMessage } from '@/components/Response/ErrorMessage';
import { useSearch } from '@/hooks/useSearch';

function App() {
  const { 
    query, 
    setQuery, 
    response, 
    resources,
    isLoading, 
    error, 
    handleSearch 
  } = useSearch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSearch();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <SearchBar
                query={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={isLoading}
              />
              <SearchButton
                isLoading={isLoading}
                disabled={isLoading || !query.trim()}
              />
            </div>
          </form>
          <ErrorMessage message={error || ''} />
          <ResponseDisplay response={response} />
          <ExternalResources resources={resources} />
        </div>
      </main>
    </div>
  );
}

export default App;