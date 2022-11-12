<template>
    <ul>
        <li v-for="product of productList" :key="product.label">
            <BaseButton @click="filterProduct(product.label)"  :mode="isSelected(product.label) ? 'outline' :''">
                {{ product.label }}
            </BaseButton>
        </li>
        <BaseButton @click="clearFilter()" mode="flat">Clear Filters</BaseButton>
    </ul>
</template>

<script>
import productData from '@/services/plantList'
export default {
    emits: [
        'filter-product', 'clear-filter'
    ],
    data() {
        return {
            productList: productData,
            selProduct: []
        }
    },
    methods: {
        isSelected(selectedProduct) {
            return this.selProduct.includes(selectedProduct)
        },
        filterProduct(selectedProduct) {
            if (this.isSelected(selectedProduct)) {
                this.selProduct = this.selProduct.filter(s => s !== selectedProduct)
            } else {
                this.selProduct = [...this.selProduct, selectedProduct]
            }
            this.$emit('filter-product', selectedProduct)
        },
        clearFilter() {
            this.selProduct = []
            this.$emit('clear-filter')
        }
    },
}
</script>
<style>
ul {
    display: flex;
    flex-direction: row;
}

li {
    padding: 0 4px
}
</style>