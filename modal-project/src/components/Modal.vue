<template>

    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme==='sail'}">
            <slot></slot>
            <div class="action">
                <slot name="links"></slot>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['header', 'text', "theme"],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    h3 {
        color: cyan;
    }
    .modal.sale {
        background: crimson;
    }
</style>