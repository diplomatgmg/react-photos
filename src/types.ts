interface Category {
  id: number
  name: string
}

interface Collection {
  id: number
  category: number
  name: string
  images: string[]
}

export type { Category, Collection }
