<template>
    <section class="testimonials">
        <div class="text-centering-container">
            <h2 class="testimonials__heading">We make people genuinely happy</h2>
        <testimonial-card title="I had the best week ever with my family"
                          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia voluptate est perspiciatis mollitia rerum doloremque quos dicta dolor quae vel delectus quas, animi quam praesentium blanditiis sed. Itaque quis illum quia reiciendis nam provident. Enim fugiat sit ex dolores?"
                          :img-src="require('../../assets/images/profiles/mary_smith.jpg')"
                          img-caption="Mary Smith"> </testimonial-card>
        <testimonial-card title="WOW! My life is completely different now"
                          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga recusandae ad inventore consequatur, fugiat molestiae facilis alias maiores! Ullam ea, numquam fuga libero! Enim, numquam. Similique corrupti vitae ratione. Sint cumque enim pariatur quis totam id."
                          :img-src="require('../../assets/images/profiles/jack_wilson.jpg')"
                          img-caption="Jack Wilson"></testimonial-card>
        <a href="#" class="btn-text">Read all <span class="arrow">&rarr;</span>
        </a>
        </div>
    </section>
</template>

<script>
import TestimonialCard from '../TestimonialCard';

export default {
    components: {
        "testimonial-card": TestimonialCard
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.testimonials {
    background-color: #ddd;
    padding: 5rem 0 15rem 0;

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

    .btn-text {
        &:link,
        &:visited {
            font-size: 1.6rem;
            color: $color-primary;
            display: inline-block;
            text-decoration: none;
            border-bottom: 1px solid $color-primary;
            padding: 3px;
            transition: transform .2s, box-shadow .2s, color .2s, background-color .2s;

            .arrow {
                line-height: 1;
                font-size: 2.5rem;
            }
        }

        &:hover {
            color: $color-white;
            background-color: $color-primary;
            box-shadow: 0 10px 20px transparentize($color-black, 0.75);
            transform: translateY(-2px);
        }

        &:active {
            box-shadow: 0 5px 10px transparentize($color-black, 0.75);
            transform: translateY(0);
        }
    }
}
</style>