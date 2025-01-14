/**
 * Represents an external resource with metadata.
 */
export interface ExternalResource {
  /**
   * The name or title of the resource.
   */
  name: string;

  /**
   * The URL of the resource.
   */
  url: string;

  /**
   * A brief description of the resource's content or purpose.
   */
  description: string;

  /**
   * A relevance score for the resource, typically between 0 and 1.
   */
  relevance: number;
}

/**
 * Represents the response of a resource query.
 */
export interface ResourceResponse {
  /**
   * The source or origin of the resource.
   */
  source: string;

  /**
   * The content or body of the resource.
   */
  content: string;

  /**
   * An optional URL associated with the resource.
   */
  url?: string;

  /**
   * A confidence score for the response, typically between 0 and 1.
   */
  confidence: number;
}
