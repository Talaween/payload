import type { Data } from 'payload/types'

import { unflatten as flatleyUnflatten } from 'flatley'

import type { FormState } from './types'

const reduceFieldsToValues = (fields: FormState, unflatten?: boolean): Data => {
  let data = {}

  Object.keys(fields).forEach((key) => {
    if (!fields[key]?.disableFormData) {
      data[key] = fields[key]?.value
    }
  })

  if (unflatten) {
    data = flatleyUnflatten(data, { safe: true })
  }

  return data
}

export default reduceFieldsToValues
