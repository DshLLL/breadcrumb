<template>
    <div>
        <a href="javascript:" :class="{active: active}" @click="skipRoute">
            <slot></slot>
        </a>
        <span class="separator">{{ separator }}</span>
    </div>

</template>

<script>
const CACHE_KEY = 'cache_request_data'
import _ from 'lodash'
export default {
    name: 'breadcrumb-item',
    inject: ['breadcrumbContext'],
    props: {
        active: {
            type: Boolean,
            default: false
        },
        to: {
            type: Object || String,
            default: () => ({})
        }
    },
    data() {
        return {
            separator: '',
        }
    },
    mounted() {
        this.separator = this.breadcrumbContext.separator
    },
    methods: {
        skipRoute() {
            if (this.active) {
                return
            }
            const cacheValue = this.$route.query[CACHE_KEY]
            const query = cacheValue ? {[CACHE_KEY]: cacheValue} : {}
            if (_.isString(this.to)) {
                this.$route.push({path: this.to, query})
                return
            }
            if (this.to.refresh) {
                location.href = this.to.path
                return
            }
            this.$router.push(_.merge(this.to, {query}))
        }
    }
}
</script>

<style scoped>

</style>
