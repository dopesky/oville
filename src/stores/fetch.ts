import Facebook from '@/assets/facebook.svg?component'
import Instagram from '@/assets/instagram.svg?component'
import Linkedin from '@/assets/linkedin.svg?component'
import Twitter from '@/assets/twitter.svg?component'
import Youtube from '@/assets/youtube.svg?component'
import { useFetch } from '@vueuse/core'
import { computed } from 'vue'

export type Image = {
  id: number
  full_image_url: string
}

export type Project = {
  id: number
  project_name: string
  client: string
  location: string | null
  description: string | null
  images: Image[]
}

export type Service = {
  id: number
  service_name: string
  description: string | null
  images: Image[]
}

export type Contact = {
  id: number
  contact_type_id: number
  contact: string
}

export type FetchRequest = {
  path: string
  method?: 'GET' | 'POST'
  timeout?: number
}

export const ContactType = {
  3: Facebook,
  4: Instagram,
  5: Twitter,
  6: Linkedin,
  7: Youtube
}

export const fetch = <T extends Project | Service | Contact>({
  path,
  timeout,
  method
}: FetchRequest) => {
  const { VITE_API_URL, VITE_API_KEY } = import.meta.env
  const {
    isFetching: loading,
    data,
    abort,
    canAbort,
    onFetchError
  } = useFetch<T[]>(
    computed(() => `${VITE_API_URL}/${path}`),
    { method },
    {
      afterFetch: (response) => {
        response.data = response.data.data
        return response
      },
      beforeFetch: ({ options, cancel }) => {
        if (!VITE_API_KEY) cancel()

        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${VITE_API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      },
      refetch: true,
      timeout: timeout || 7500
    }
  ).json()

  return {
    loading,
    data,
    error: onFetchError,
    abort: canAbort ? abort : undefined
  }
}
