export type QueryType = 
  | 'DEFINITION'
  | 'PROCEDURE'
  | 'REQUIREMENT'
  | 'TIMEFRAME'
  | 'LOCATION'
  | 'RESPONSIBILITY'
  | 'GENERAL';

export type QueryContext =
  | 'CLAIMS'
  | 'POLICY'
  | 'COVERAGE'
  | 'PAYMENT'
  | 'CANCELLATION'
  | 'RENEWAL'
  | 'GENERAL';

export interface QueryAnalysis {
  type: QueryType;
  context: QueryContext;
  keywords: string[];
  entities?: string[];
  originalQuery: string;
}