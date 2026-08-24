export interface Root {
  products: IProduct[]
}

export interface IProduct {
  id: number|string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number

}
