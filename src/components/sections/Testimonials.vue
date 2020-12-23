<template>
    <section class="testimonials">
        <div class="background-video">
            <video class="background-video__content" autoplay muted loop>
                <source src="../../assets/videos/testimonials-background.mp4" type="video/mp4">
                <source src="../../assets/videos/testimonials-background.webm" type="video/webm">
            </video>
        </div>
        <div class="text-centering-container">
            <h2 class="section-heading">We make people genuinely happy</h2>
                <testimonial-card v-for="card of testimonialCards"
                                  :key="card.id"
                                  :title="card.title"
                                  :text="card.text"
                                  :img-src="card.imgSrc"
                                  :img-caption="card.imgCaption">
                </testimonial-card>
        <text-link-button href="#" text="Read all"></text-link-button>
        </div>
    </section>
</template>

<script>
import TestimonialCard from '../TestimonialCard';
import TextLinkButton from '../TextLinkButton';
export default {
    components: {
        "testimonial-card": TestimonialCard,
        "text-link-button": TextLinkButton
    },
    data: function(){
        return {
            testimonialCards: [
                {
                    id:'mary_smith_0',
                    title: "I had the best week ever with my family",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia voluptate est perspiciatis mollitia rerum doloremque quos dicta dolor quae vel delectus quas, animi quam praesentium blanditiis sed. Itaque quis illum quia reiciendis nam provident. Enim fugiat sit ex dolores?",
                    imgSrc: require('../../assets/images/profiles/mary_smith.jpg'),
                    imgCaption: "Mary Smith"
                },
                {
                    id:'jack_wilson_0',
                    title: "WOW! My life is completely different now",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga recusandae ad inventore consequatur, fugiat molestiae facilis alias maiores! Ullam ea, numquam fuga libero! Enim, numquam. Similique corrupti vitae ratione. Sint cumque enim pariatur quis totam id.",
                    imgSrc: require('../../assets/images/profiles/jack_wilson.jpg'),
                    imgCaption: "Jack Wilson"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.testimonials {
    padding: 5rem 0 15rem 0;
    position: relative;
}

.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .15;

    &__content {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

</style>