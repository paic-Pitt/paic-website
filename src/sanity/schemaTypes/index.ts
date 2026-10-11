import { type SchemaTypeDefinition } from 'sanity'

import { announcement } from './announcement'
import { event } from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, announcement],
}
