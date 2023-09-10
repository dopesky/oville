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

export const whoWeAre = ref({
  name: 'about',
  title: 'Who We Are',
  description: `Oville Associates is a Consulting Engineering Firm that specialises in the planning, design and construction supervision of infrastructure & building projects. We also provide project management services. Apart from the traditional civil/structural engineering, we have established a strong presence in the forensic engineering field. This entails structural investigations to determine causes and remedial action for defects, structural assessments to determine capacities of structures and structural elements, and structural audits to establish structural soundness of structures. Non-Destructive Testing (NDT) techniques are applied to determine the properties of the subject structures such as amount of steel and strength of concrete. The firm employs qualified and competent engineers, technicians and support staff. The Company has a spacious office premise, immaculately furnished to provide the working environment conducive for design and development work. All our projects’ data is backed up on cloud. Oville Associates Ltd was founded by <b>Eng. Paul Karara Ngunjiri</b> in 2015.`,
  image:
    'https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-modern-house-plans-1.webp'
})

export const ourPhilosophy = ref([
  {
    title: 'Work Ethic',
    content:
      'At Oville Associates, we have a moral code that includes the obligation to carry out work that is simply well done. Our output must be without blemish,must be done to completion and with due care to finer details. We seek to provide ordinary services in extra ordinary ways.'
  },
  {
    title: 'Technology',
    content:
      'As Engineers, technology is at the heart of our practice. At Oville Associates, we embrace and invest in the most current technologies to enable us serve our clients most efficiently. Use of technology enables us to deliver designs on time, communicate efficiently and keep our records secure and easily accessible. All our data is securely stored on a cloud platform'
  },
  {
    title: 'Clients',
    content:
      'Our clients are our first priority. Our work is invari- ably aligned to the aspira- tions of our clients for their projects.'
  },
  {
    title: 'Staff',
    content:
      'We value our staff as much as we value the business they assist us to handle. All our staff are well trained in their areas of specialisation and in interpersonal skills to make our clients’ interaction with Oville Associates as pleasant as possible.'
  },
  {
    title: 'Continuous Professional Development',
    content:
      'We appreciate that the ethical requirement of working well necessarily entails the obligation, also ethical, of continuous professional develop- ment, even more necessary today because of the accelerated advance of science and technology. At Oville Associates, we are very open to new ideas and are continuously engaging professional development to broaden our knowledge on new and best practises in the industry to enable us serve our clients better.'
  }
])
