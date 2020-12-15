<template>
    <section class="features">
        <div class="grid">
            <div class="row">
                <div v-for="feature in features" :key="feature.title" class="col-1-of-4">
                    <feature-card :iconClass="feature.iconClass" :title="feature.title">
                        {{ feature.text }}
                    </feature-card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FeatureCard from '../FeatureCard';

export default {
    components: {
        "feature-card": FeatureCard
    },
    data: function(){
        return {
            features: [
                {
                    iconClass: "basic-world",
                    title: "Explore the world",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, dolore?"
                },
                {
                    iconClass: "basic-compass",
                    title: "Meet nature",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sed?"
                },
                {
                    iconClass: "basic-map",
                    title: "Find your way",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos."
                },
                {
                    iconClass: "basic-heart",
                    title: "Live a healthier life",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, illo."
                }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.features {
    padding: 20rem 0;
    margin-top: -13rem;

    $bg-colors-transparent-amount: .3;
    $bg-color-top-left : transparentize($color-primary-lighter, $bg-colors-transparent-amount);
    $bg-color-bottom-right: transparentize($color-primary-darker, $bg-colors-transparent-amount);
    
    position: relative;
    background-image: linear-gradient(to bottom right, $bg-color-top-left, $bg-color-bottom-right), url("../../assets/images/features-bg.jpg");
    background-size: cover;

    transform: skewY(-7deg);

    & > * {
        transform: skewY(7deg);
    }
}
</style>