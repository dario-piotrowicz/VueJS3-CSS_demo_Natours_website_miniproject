<template>
    <section class="booking">
        <div class="booking__content">
            <div class="booking-form">
            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.booking {
    padding: 15rem;
    background-image: linear-gradient(to right bottom, $color-primary-lighter, $color-primary-darker);

    &__content {
        background-color: white;
        height: 50rem;
    }
}
</style>