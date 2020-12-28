<template>
    <div class="book-now-popup">
        <div class="book-now-popup__content-wrapper">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.book-now-popup {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: transparentize($color-black, .8);
    backdrop-filter: blur(10px);
    z-index: 9999;

    &__content-wrapper {
        background-color: $color-white;
        position: absolute;
        width: 75%;
        height: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        overflow: hidden;
    }
}
</style>