<!-- eslint-disable vue/valid-v-slot -->
<template>
  <VDataTable
    :headers="headers"
    :items="productsData"
    :sort-by="[{ key: 'name', order: 'asc' }]"
  >
    <template #top>
      <VToolbar flat>
        <VToolbarTitle>Table products</VToolbarTitle>
        <VDivider
          class="mx-4"
          inset
          vertical
        />
        <VSpacer />

        <VDialog
          v-model="dialog"
          max-width="500px"
        >
          <template #activator="{ props }">
            <VBtn
              variant="tonal"
              color="secondary"
              class="mr-2"
              dark
              v-bind="props"
            >
              Register product
            </VBtn>
          </template>
          <VCard>
            <VCardTitle>
              <span>ARRUMAR AQUI</span>
            </VCardTitle>

            <VCardText>
              <VContainer>
                <VRow>
                  <VCol
                    v-for="item in textField"
                    :key="item.label"
                    cols="12"
                    md="4"
                    sm="6"
                  >
                    <VTextField
                      :v-model="item.vModel"
                      :label="item.label"
                    />
                  </VCol>
                </VRow>
              </VContainer>
            </VCardText>

            <VCardActions>
              <VSpacer />
              <VBtn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancel
              </VBtn>
              <VBtn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Save
              </VBtn>
            </VCardActions>
          </VCard>
        </VDialog>

        <VDialog
          v-model="dialogDelete"
          max-width="500px"
        >
          <VCard>
            <VCardTitle>
              Are you sure you want to delete this item?
            </VCardTitle>
            <VCardActions>
              <VSpacer />

              <VBtn
                color="blue-darken-1"
                variant="text"
                @click="closeDelete"
              >
                Cancel
              </VBtn>
              <VBtn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
              >
                Delete
              </VBtn>

              <VSpacer />
            </VCardActions>
          </VCard>
        </VDialog>
      </VToolbar>
    </template>
    
    <template #item.actions="{ item }">
      <VIcon
        class="me-2"
        size="small"
        @click="handleEditItem(item)"
      >
        mdi-pencil
      </VIcon>

      <VIcon
        class="me-2"
        size="small"
        @click="deleteItem(item)"
      >
        mdi-delete
      </VIcon>
    </template>

    <!-- <template #no-data>
      <VBtn
        color="primary"
        @click="initialize"
      >
        Reset
      </VBtn>
    </template> -->
  </VDataTable>
</template>

<script lang="ts" setup>
import type { Product } from '@/@types/products'
import { ref } from 'vue'
import type { VDataTable } from 'vuetify/components'

type ReadonlyHeaders = InstanceType<typeof VDataTable>['$props']['headers']
defineProps<{ productsData?: Product[]}>()


const headers: ReadonlyHeaders = [
  { key: 'name', title: 'Name', align: 'start', sortable: true },
  { key: 'code', title: 'Code', align: 'start', sortable: false },
  { key: 'quantity', title: 'Quantity', align: 'start', sortable: false },
  { key: 'actions', title: 'Actions', align: 'end', sortable: false },
]

const dialog = ref(false)
const dialogDelete = ref(false)
const editedItem = ref<Product | null>(null)
// const defaultItem = { name: '', code: '', quantity: 0 }
const deleteTarget = ref<Product | null>(null)

const textField = [
  {
    vModel: () => editedItem.value?.name,
    label: 'name'
  },
  {
    vModel: () => editedItem.value?.code,
    label: 'code'
  },
  {
    vModel: () => editedItem.value?.quantiy,
    label: 'quantity'
  },
]

function handleEditItem(item: Product){
  editedItem.value = { ...item}
  dialog.value = true
}

function deleteItem(item: Product){
  deleteTarget.value = item
  dialogDelete.value = true
}

function deleteItemConfirm(){
  if (deleteTarget.value){
    // TODO: fix me
  }
  closeDelete()
}

function closeDelete(){
  dialogDelete.value = false
  deleteTarget.value = null
}

function close(){
  dialog.value = false
  editedItem.value = null
}

function save(){
  if (editedItem.value){
    // TODO: fix me
  }
  close()
}
</script>