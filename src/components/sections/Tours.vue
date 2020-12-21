<template>
    <section class="tours">
        <div class="text-centering-container">
            <h2 class="section-heading">Most popular tours</h2>
        </div>
        <div class="grid">
            <div class="row">
                <div class="col-1-of-3">
                    <tour-card color-scheme="orange"
                               title="the sea explorer"
                               :num-of-days="3"
                               :num-of-people="30"
                               :num-of-guides="2"
                               sleep-in="cozy hotels"
                               difficulty="easy"
                               :price="250"></tour-card>
                </div>
                <div class="col-1-of-3">
                    <tour-card color-scheme="green"
                               title="the forest hiker"
                               :num-of-days="7"
                               :num-of-people="40"
                               :num-of-guides="6"
                               sleep-in="provided tents"
                               difficulty="medium"
                               :price="470"></tour-card>
                </div>
                <div class="col-1-of-3">
                    <tour-card color-scheme="blue"
                               title="the snow adventurer"
                               :num-of-days="5"
                               :num-of-people="15"
                               :num-of-guides="3"
                               sleep-in="provided tents"
                               difficulty="hard"
                               :price="899"></tour-card>
                </div>
            </div>
        </div>
        <div class="text-centering-container animated-link-button-container">
            <animated-link-button href="#" color-scheme="green">Discover all tours</animated-link-button>
        </div>
    </section>
</template>

<script>
import TourCard from '../TourCard';
import AnimatedLinkButton from '../AnimatedLinkButton';

export default {
    components: {
        "tour-card": TourCard,
        "animated-link-button": AnimatedLinkButton
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.tours {
    background-color: $bg-color-neutral-light;
    padding: 30rem 0 15rem 0;
    margin-top: -15rem;

    .animated-link-button-container {
        margin-top: 8rem;
        padding: 3rem;
    }
}
</style>