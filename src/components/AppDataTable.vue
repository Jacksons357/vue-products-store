<template>
  <VTable>
    <thead>
      <tr>
        <th>Name</th>
        <th>code</th>
        <th>quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="product in productsData"
        :key="product.name"
      >
        <td>{{ product.name }}</td>
        <td>{{ product.code }}</td>
        <td>{{ product.quantity }}</td>
      </tr>
    </tbody>
  </VTable>
</template>

<script lang="ts" setup>
import type { Product } from '@/@types/products';

defineProps<{ productsData?: Product[]}>()

</script>