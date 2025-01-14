/**
 * Represents the type of a user query.
 */
export type QueryType = 
  | 'DEFINITION'        // Queries seeking definitions of terms
  | 'PROCEDURE'         // Queries about processes or steps
  | 'REQUIREMENT'       // Queries about prerequisites or conditions
  | 'TIMEFRAME'         // Queries about deadlines or durations
  | 'LOCATION'          // Queries about geographical information
  | 'RESPONSIBILITY'    // Queries about roles or duties
  | 'GENERAL'           // General queries not falling into other categories
  | 'INSURANCE';        // Queries related specifically to insurance information

/**
 * Represents the context of a user query.
 */
export type QueryContext =
  | 'CLAIMS'            // Queries related to insurance claims
  | 'POLICY'            // Queries about insurance policies
  | 'COVERAGE'          // Queries about insurance coverage
  | 'PAYMENT'           // Queries about payment details
  | 'CANCELLATION'      // Queries about policy cancellations
  | 'RENEWAL'           // Queries about policy renewals
  | 'GENERAL';          // General context or unspecified queries

/**
 * Represents the analysis of a user query.
 */
export interface QueryAnalysis {
  /**
   * The determined type of the query.
   */
  type: QueryType;

  /**
   * The specific context or category of the query.
   */
  context: QueryContext;

  /**
   * Extracted keywords from the query.
   */
  keywords: string[];

  /**
   * Extracted entities from the query (optional).
   */
  entities?: string[];

  /**
   * The original query string provided by the user.
   */
  originalQuery: string;
}