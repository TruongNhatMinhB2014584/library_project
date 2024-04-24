<template>
  <div class="page">
    <hr />
    <ListProduct :products="products" :formatPriceVND="formatPriceVND" />
  </div>
</template>

<script>
import ListProduct from "@/components/ListProduct.vue";
import productService from "@/services/product.service.js";
import { ref, onMounted } from "vue";

export default {
  components: {
    ListProduct,
  },
  setup() {
    const products = ref([]);
    const fetchProducts = async () => {
      try {
        const response = await productService.findAll();
        products.value = response;
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    const formatPriceVND = (price) => {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
    };

    return {
      products,
      formatPriceVND,
    };
  },
};
</script>
