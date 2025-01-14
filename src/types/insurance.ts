/**
 * Types for insurance-related data and queries.
 */

/**
 * Represents a query related to insurance information.
 */
export interface InsuranceQuery {
  query: string; // The user's query text
  timestamp: string; // The time when the query was made
  category: string; // The category of the query (e.g., "general", "rights")
}

/**
 * Represents a section of the insurance code.
 */
export interface InsuranceCode {
  section: string; // The section identifier or title
  content: string; // The content of the insurance code section
  references: string[]; // List of references associated with the section
}

/**
 * Represents a section of insurance-related information.
 */
export type InsuranceSection = {
  id: string; // Unique identifier for the section
  title: string; // Title of the section
  content: string; // Content of the section
  type: string; // Type of the section, e.g., "GENERAL", "CLAIMS"
  context: string; // Context of the section, e.g., "GENERAL", "POLICY"
};