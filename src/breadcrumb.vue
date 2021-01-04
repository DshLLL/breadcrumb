<template>
    <div class="cb-breadcrumb" >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'breadcrumb',
    props: {
        separator: {
            type: String,
            default: '|'
        }
    },
    provide() {
        return {
            breadcrumbContext: this
        }
    }
}
</script>

<style lang="scss" scoped>
    .cb-breadcrumb {
        padding: 20px 15px;
    }
    .cb-breadcrumb /deep/ div {
        display: inline-block;
        vertical-align: middle;
        &:last-child {
            .separator {
                display: none;
            }
        }
    }

    .cb-breadcrumb /deep/ a {
        color: #8F9BB3;
        padding: 0 5px;
    }

    .cb-breadcrumb /deep/ a:hover {
        color: #0FDCDD;
    }

    .cb-breadcrumb /deep/ a.active {
        color: #0FDCDD;
    }
</style>
