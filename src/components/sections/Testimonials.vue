<template>
    <section class="testimonials">
        <div class="text-centering-container">
            <h2 class="section-heading">We make people genuinely happy</h2>
        <testimonial-card title="I had the best week ever with my family"
                          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia voluptate est perspiciatis mollitia rerum doloremque quos dicta dolor quae vel delectus quas, animi quam praesentium blanditiis sed. Itaque quis illum quia reiciendis nam provident. Enim fugiat sit ex dolores?"
                          :img-src="require('../../assets/images/profiles/mary_smith.jpg')"
                          img-caption="Mary Smith"> </testimonial-card>
        <testimonial-card title="WOW! My life is completely different now"
                          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga recusandae ad inventore consequatur, fugiat molestiae facilis alias maiores! Ullam ea, numquam fuga libero! Enim, numquam. Similique corrupti vitae ratione. Sint cumque enim pariatur quis totam id."
                          :img-src="require('../../assets/images/profiles/jack_wilson.jpg')"
                          img-caption="Jack Wilson"></testimonial-card>
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
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.testimonials {
    background-color: #ddd;
    padding: 5rem 0 15rem 0;
}
</style>