import { authData, getClient } from '$lib/lemmy.js'
import { get } from 'svelte/store'

export function load({ params }) {
  return {
    user: getClient().getPersonDetails({
      limit: 40,
      page: 1,
      username: params.name,
      sort: 'New',
      auth: get(authData)?.token,
    }),
  }
}
