<script setup lang="ts">
    import { Routes } from '@/router/enum/Routes';
    import type { Product } from '@/stores/shop/Product';
    import { useShopStore } from '@/stores/ShopStore';
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';

    enum SortBy {
        BRAND = 'brand',
        MODEL = 'model',
        PRICE_ASC = 'price-asc',
        PRICE_DESC = 'price-desc',
    }

    const props = defineProps<{ brand?: string; sort?: string }>();
    const router = useRouter();
    const shop = useShopStore();
    const sort = ref<string>('');
    const filter = ref<string>('');
    const isBrand = ref<boolean>(false);

    /**
     *
     */
    const list = computed(() => {
        const inventory = shop.inventory();
        isBrand.value = false;
        filter.value = 'all';

        if (props.brand && inventory.hasBrandById(props.brand)) {
            inventory.filterTo((product: Product) => product.brand.id === props.brand);
            isBrand.value = true;
            filter.value = props.brand;
        }

        switch (props.sort) {
            case SortBy.MODEL:
                inventory.sortBy([SortBy.MODEL]);
                sort.value = props.sort;
                break;
            case SortBy.PRICE_ASC:
                inventory.sortBy((product: Product) => product.price.amount);
                sort.value = props.sort;
                break;
            case SortBy.PRICE_DESC:
                inventory.sortBy((product: Product) => product.price.amount);
                inventory.reverse();
                sort.value = props.sort;
                break;
            case SortBy.BRAND:
            default:
                inventory.sortBy((product: Product) => product.brand.name + product.model);
                sort.value = isBrand.value ? SortBy.MODEL : SortBy.BRAND;
                break;
        }

        return inventory.getList();
    });

    /**
     *
     */
    function onSortSelect() {
        let query = {
            sort: sort.value,
            brand: isBrand ? props.brand : undefined,
        };
        router.push({ name: Routes.PRODUCT_LIST, query });
    }

    /**
     *
     */
    function onFilterSelect() {
        let query = {
            sort: props.sort !== SortBy.BRAND ? props.sort : undefined,
            brand: filter.value != 'all' ? filter.value : undefined,
        };
        router.push({ name: Routes.PRODUCT_LIST, query });
    }
</script>
<template>
    <div class="product-list">
        <div class="list">
            <div class="selects">
                <div class="select-sort">
                    <label class="input-label" for="sort">Sort by </label>
                    <select
                        @change="onSortSelect"
                        v-model="sort"
                        class="input-select"
                        name="sort"
                        id="sort"
                    >
                        <option v-if="!isBrand" :value="SortBy.BRAND" default>Brand</option>
                        <option :value="SortBy.MODEL">Model</option>
                        <option :value="SortBy.PRICE_ASC">Price (asc.)</option>
                        <option :value="SortBy.PRICE_DESC">Price (desc.)</option>
                    </select>
                </div>
                <div class="select-filter">
                    <label class="input-label" for="filter">Filter by brand</label>
                    <select
                        @change="onFilterSelect"
                        v-model="filter"
                        class="input-select"
                        name="filter"
                        id="filter"
                    >
                        <option value="all" default>All</option>
                        <option
                            v-for="(brand, index) in shop.allBrands"
                            :key="index"
                            :value="brand.id"
                        >
                            {{ brand.name }}
                        </option>
                    </select>
                </div>
            </div>

            <RouterLink
                v-for="(product, index) in list"
                :key="index"
                :to="{ name: Routes.PRODUCT_DETAILS, params: { id: product.id } }"
                class="product-list-item"
            >
                <div class="image">
                    <img :src="product.image" alt="" />
                </div>
                <div class="texts">
                    <p class="brand">{{ product.brand.name }}</p>
                    <p class="model">{{ product.model }}</p>
                    <div class="divider"></div>
                    <p class="description">{{ product.description.short }}</p>
                    <p class="price">
                        {{ product.price.amount.toLocaleString() + ' ' + product.price.currency }}
                    </p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/scss/common/color';
    @use '@/scss/common/layout';
    @use '@/scss/common/breakpoints';
    @use '@/scss/common/gui/inputs';
    .product-list {
        .list {
            max-width: layout.$list-max-width;
            margin: 0 auto;

            .selects {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                margin-bottom: 4rem;
                width: 100%;

                @include breakpoints.from-md() {
                    align-items: flex-end;
                    flex-direction: row;
                    justify-content: center;

                    gap: 2rem;
                }
                .input-label {
                    margin-right: 0.4rem;
                }

                .input-select {
                    @include inputs.select;
                    width: 100%;
                    @include breakpoints.from-md() {
                        width: 200px;
                    }
                }
            }

            .product-list-item {
                display: flex;
                flex-direction: column;
                margin-bottom: 1rem;

                @include breakpoints.from-md() {
                    flex-direction: row;

                    gap: 1rem;
                }

                &:hover {
                    .brand,
                    .model,
                    .description,
                    .price {
                        color: color.$secondary !important;

                        @include breakpoints.from-md() {
                            transform: translateX(10px);
                        }
                    }
                }

                .image {
                    align-self: center;

                    img {
                        width: 100%;
                        height: auto;
                        max-width: 400px;
                        object-fit: cover;
                        @include breakpoints.from-md() {
                            width: 200px;
                        }
                    }
                }

                $transition: all 0.2s ease;

                .texts {
                    flex: 1;

                    @include breakpoints.from-md() {
                        padding-top: 3rem;
                    }

                    .brand {
                        font-weight: 700;
                        font-size: 1.2rem;
                        text-transform: uppercase;
                        margin-bottom: 0.5rem;
                        transition: $transition;
                    }

                    .model {
                        text-transform: uppercase;
                        margin-bottom: 0.1rem;
                        transition: $transition;
                    }

                    .divider {
                        border-top: 1px solid rgb(192, 192, 192);
                        margin-bottom: 0.5rem;
                    }

                    .description {
                        margin-bottom: 0.7rem;
                        transition: $transition;
                    }

                    .price {
                        font-weight: 700;
                        color: grey;
                        transition: $transition;
                    }
                }
            }
        }
    }
</style>
