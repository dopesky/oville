import Facebook from '@/assets/facebook.svg'
import Instagram from '@/assets/instagram.svg'
import Linkedin from '@/assets/linkedin.svg'
import Twitter from '@/assets/twitter.svg'
import Youtube from '@/assets/youtube.svg'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import { useFetch } from '@vueuse/core'
import { computed, ref } from 'vue'

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

export type Team = {
  id: number
  full_name: string
  full_profile_photo_url?: string
  contacts?: Contact[]
  bio?: string
  qualifications?: string
  role?: string
}

export type EmailResponse = {
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
  message?: string
  success?: boolean
}

export type FetchRequest = {
  path: string
  body?: string
  method?: 'GET' | 'POST'
  timeout?: number
}

export const ContactType = {
  1: PhoneIcon,
  2: EnvelopeIcon,
  3: Facebook,
  4: Instagram,
  5: Twitter,
  6: Linkedin,
  7: Youtube
}

export const fetch = <T extends Project | Service | Contact | Team | EmailResponse>({
  path,
  timeout,
  method,
  body
}: FetchRequest) => {
  const { VITE_API_URL, VITE_API_KEY } = import.meta.env
  if (!VITE_API_URL)
    return {
      loading: ref(false),
      error: ref({}),
      data: ref([])
    }

  const {
    isFetching: loading,
    data,
    abort,
    canAbort,
    error,
    onFetchError
  } = useFetch<T[]>(
    computed(() => `${VITE_API_URL}/${path}`),
    { method, body },
    {
      afterFetch: (response) => {
        if (method === 'POST') return response
        response.data = response.data.data
        return response
      },
      onFetchError: ({ data }) => ({ error: data }),
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

  onFetchError(console.error)

  return {
    loading,
    data,
    error,
    abort: canAbort ? abort : undefined
  }
}
