<template>
    <ul>
        <li v-for="product of productData" :key="product.label">
            <BaseButton @click="filterProduct(product.label)"
                :mode="isSelected(product.label) ? 'outline small' : 'small'">
                {{ product.label }}
            </BaseButton>
        </li>
        <BaseButton @click="clearFilter()" mode="flat small">Clear Filters</BaseButton>
    </ul>
</template>

<script>
export default {
    emits: [
        'filter-product', 'clear-filter'
    ],
    data() {
        return {
            selectedProducts: []
        }
    },
    props: ['productData'],
    methods: {
        isSelected(selectedProduct) {
            return this.selectedProducts.includes(selectedProduct)
        },
        filterProduct(selectedProduct) {
            if (this.isSelected(selectedProduct)) {
                this.selectedProducts = this.selectedProducts.filter(s => s !== selectedProduct)
            } else {
                this.selectedProducts = [...this.selectedProducts, selectedProduct]
            }
            this.$emit('filter-product', selectedProduct)
        },
        clearFilter() {
            this.selectedProducts = []
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