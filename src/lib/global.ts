export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  variant: string[];
}

export type responseProduct = {
    data: Product[];
    code: number;
    body: string;
}