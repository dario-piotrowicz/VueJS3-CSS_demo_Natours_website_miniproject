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
                               :price="tour.price"
                               @book-now-click="bookNowPopupIsOpen = true">
                    </tour-card>
                </div>
            </div>
        </div>
        <div class="text-centering-container animated-link-or-button-container">
            <animated-link-or-button href="#" color-scheme="green">
                Discover all tours
            </animated-link-or-button>
        </div>
    </section>
    <book-now-popup :show="bookNowPopupIsOpen" @close="bookNowPopupIsOpen = false"></book-now-popup>
</template>

<script>
import TourCard from '../TourCard';
import AnimatedLinkOrButton from '../AnimatedLinkOrButton';
import BookNowPopup from '../BookNowPopup';

export default {
    components: {
        "tour-card": TourCard,
        "animated-link-or-button": AnimatedLinkOrButton,
        "book-now-popup": BookNowPopup
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

            ],
            bookNowPopupIsOpen: false
        };
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/media-queries.scss';

.tours {
    background-color: $bg-color-neutral-light;
    padding: 30rem 5rem 10rem;
    margin-top: -15rem;

    @include natours-mq(tablet-landscape) {
        padding: 25rem 5rem 8rem;
    }
    @include natours-mq(tablet-portrait) {
        padding-bottom: 7rem;
    }

    .animated-link-or-button-container {
        margin-top: 8rem;
        padding: 3rem;
    }
}
</style>