<template>
    <section class="booking">
        <div class="booking__content">
            <div class="booking__form-container">
                <booking-form></booking-form>
            </div>
        </div>
    </section>
</template>

<script>
import BookingForm from '../BookingForm';

export default {
    components: {
        "booking-form": BookingForm
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/media-queries.scss';

.booking {
    padding: 15rem;
    background-image: linear-gradient(to right bottom, $color-primary-lighter, $color-primary-darker);

    @include natours-mq(tablet-landscape) {
        padding: 13rem;
    }
    @include natours-mq(tablet-portrait) {
        padding: 10rem;
    }

    &__content {
        background-image: linear-gradient(
                105deg,
                transparentize($color-white, 0.18) 0%,
                transparentize($color-white, 0.18) 49.9%,
                transparent 50%
            ),
            url("../../assets/images/booking-bg.jpg"
        );
        background-size: cover;
        border-radius: 3px;
        box-shadow: 0 1.5rem 4rem transparentize($color-black, 0.6);
    }

    &__form-container {
        width: 50%;
        padding: 6rem;
    }
}
</style>