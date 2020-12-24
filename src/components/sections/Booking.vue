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
        height: 50rem;

        background-image: url("../../assets/images/booking-bg.jpg");
        background-size: cover;
        border-radius: 3px;
        box-shadow: 0 1.5rem 4rem transparentize($color-black, 0.6);
    }
}
</style>