<template>
    <div :class="`book-now-popup${ show ? ' book-now-popup--visible' : '' }`" @click="$emit('close')">
        <div class="book-now-popup__content-wrapper" @click="$event.stopPropagation()">
            <div class="book-now-popup__left-pane">
            </div>
            <div class="book-now-popup__right-pane">
                <button @click="$emit('close')">&times;</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.book-now-popup {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: transparentize($color-black, .7);
    backdrop-filter: blur(0);
    z-index: 9999;

    opacity: 0;
    visibility: hidden;

    transition: opacity .5s, backdrop-filter 1s;

    &--visible {
        opacity: 1;
        visibility: visible;
        backdrop-filter: blur(10px);
    }

    &__content-wrapper {
        background-color: $color-white;
        position: absolute;
        width: 75%;
        height: 70%;
        top: 50%;
        left: 50%;
        opacity: 0;
        transform: translate(-50%, -50%) scale(.25);
        border-radius: 5px;
        overflow: hidden;
        transition: opacity .4s .2s, transform .4s .2s;
    }

    &--visible &__content-wrapper {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

}
</style>