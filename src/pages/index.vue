<template>
  <VContainer>
    <AppDataTable :products-data="data" />
  </VContainer>
</template>

<script lang="ts" setup>

import type { Product } from '@/@types/products';
import { fetchProducts } from '@/lib/products/fetch-products'
import { useQuery } from '@tanstack/vue-query';


const { data } = useQuery<Product[]>({
  queryKey: ['products'],
  queryFn: fetchProducts
})

</script>
