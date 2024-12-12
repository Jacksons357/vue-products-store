import type { Product } from "@/@types/products"
import supabase from "../supabase"

export async function fetchProducts(): Promise<Product[]>{
  const { data } = await supabase
    .from('products')
    .select()

  return data as Product[]
}