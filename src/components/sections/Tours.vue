<template>
    <section class="tours">
        <div class="text-centering-container">
            <h2 class="section-heading">Most popular tours</h2>
        </div>
        <div class="grid">
            <div class="row">
                <div v-for="tour of tours" :key="tour.title" class="col-1-of-3">
                    <tour-card :color-scheme="tour.colorScheme"
                               :title="tour.title"
                               :num-of-days="tour.numOfDays"
                               :num-of-people="tour.numOfPeople"
                               :num-of-guides="tour.numOfGuides"
                               :sleep-in="tour.sleepIn"
                               :difficulty="tour.difficulty"
                               :price="tour.price">
                    </tour-card>
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
    },
    data: function(){
        return {
            tours: [
                    {
                        colorScheme: "orange",
                        title: "the sea explorer",
                        numOfDays: 3,
                        numOfPeople: 30,
                        numOfGuides: 2,
                        sleepIn: "cozy hotels",
                        difficulty: "easy",
                        price: 250
                    },
                    {
                        colorScheme: "green",
                        title: "the forest hiker",
                        numOfDays: 7,
                        numOfPeople: 40,
                        numOfGuides: 6,
                        sleepIn: "provided tents",
                        difficulty: "medium",
                        price: 470
                    },
                    {
                        colorScheme: "blue",
                        title: "the snow adventurer",
                        numOfDays: 5,
                        numOfPeople: 15,
                        numOfGuides: 3,
                        sleepIn: "provided tents",
                        difficulty: "hard",
                        price: 899
                    }

            ]
        };
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