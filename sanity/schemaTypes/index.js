import { authorType } from './authorType.js'  // ✅ Use named import
import {blockContentType} from './blockContentType.js'
import {categoryType} from './categoryType.js'
import {postType} from './postType.js'
import {projectType} from './projectType.js'
import { serviceType } from './serviceType.js'

export const schemaTypes = [
  authorType,
  blockContentType,
  categoryType,
  postType,
  projectType,
  serviceType,
]