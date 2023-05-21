import { PrimaryBodyRepresentation } from '../models';

export interface GetBlogPosts {
  /** Filter the results based on blog post ids. Multiple blog post ids can be specified as a comma-separated list. */
  id?: number[];
  /** Filter the results to blog posts based on their status. */
  status?: string;
  /**
   * The content format types to be returned in the `body` field of the response. If available, the representation will
   * be available under a response field of the same name under the `body` field.
   */
  bodyFormat?: PrimaryBodyRepresentation;
  /**
   * Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the
   * relative URL in the `Link` header to retrieve the `next` set of results.
   */
  cursor?: string;
  /**
   * Maximum number of blog posts per result to return. If more results exist, use the `Link` response header to
   * retrieve a relative URL that will return the next set of results.
   */
  limit?: number;
}