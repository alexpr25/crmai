export interface InsuranceQuery {
  query: string;
  timestamp: string;
  category: string;
}

export interface InsuranceCode {
  section: string;
  content: string;
  references: string[];
}