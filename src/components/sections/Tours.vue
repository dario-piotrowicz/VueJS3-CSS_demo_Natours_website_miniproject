<template>
    <section class="tours">
        <div class="text-centering-container">
            <h2 class="tours__heading">Most popular tours</h2>
        </div>
        <div class="grid">
            <div class="row">
                <div class="col-1-of-3">
                    <tour-card></tour-card>
                </div>
                <div class="col-1-of-3">
                    <tour-card></tour-card>
                </div>
                <div class="col-1-of-3">
                    <tour-card></tour-card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TourCard from '../TourCard';

export default {
    components: {
        "tour-card": TourCard
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.tours {
    background-color: $bg-color-neutral-light;
    padding: 30rem 0 50rem 0;
    margin-top: -15rem;

    &__heading {
        display: inline-block;
        font-size: 3.5rem;
        text-transform: uppercase;
        margin-bottom: 8rem;
        font-weight: 700;
        background-image: linear-gradient(to right, $color-primary-lighter, $color-primary-darker);
        background-clip: text;
        color: transparent;
        letter-spacing: 2px;
        transition: transform .2s, text-shadow .2s;

        &:hover {
            transform: skewY(2deg) skewX(15deg) scale(1.05);
            text-shadow: 5px 10px 20px transparentize($color-black, 0.65);
        }
    }
}
</style>