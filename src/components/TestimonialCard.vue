<template>
    <div class="testimonial-card">
        <figure class="testimonial-card__figure">
            <img class="testimonial-card__image"
                 :src="imgSrc"
                 alt="person on a tour">
            <figcaption class="testimonial-card__image-caption">{{ imgCaption }}</figcaption>
        </figure>
        <div class="testimonial-card__text-content">
            <h3 class="testimonial-card__heading">{{ title }}</h3>
            <p class="testimonial-card__testimonial-text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        },
        imgCaption: {
            type: String,
            required: true
        }
    }
}
</script>>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.testimonial-card {
    width: 75%;
    min-height: 27rem;
    margin: 8rem auto;
    box-shadow: 0 3rem 6rem transparentize($color-black, 0.8);
    background-color: $color-white;
    border-radius: 3px;
    padding: 6rem;
    padding-left: 9rem;
    font-size: 1.6rem;
    $skew-x-degrees: 12deg;
    transform: skewX(-$skew-x-degrees);

    & > * {
        transform: skewX($skew-x-degrees);
    }

    &__figure {
        $side: 15rem;
        width: $side;
        height: $side;
        float: left;
        $circle: circle(50% at 50% 50%);
        shape-outside: $circle;
        clip-path:  $circle;
        transform: translate(-3rem) skewX($skew-x-degrees);
        position: relative;
        overflow: hidden;
    }

    &__image {
        height: 100%;
        transform: translateX(-4rem) scale(1.4);
        transition: transform .5s, filter .5s;
        backface-visibility: hidden;
    }

    &:hover &__image {
        transform: translateX(-4rem) scale(1);
        filter: blur(4px) brightness(80%);
    }

    &__image-caption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,20%);
        color: $color-white;
        text-transform: uppercase;
        font-size: 1.7rem;
        text-align: center;
        opacity: 0;
        transition: transform .5s, opacity .5s;
    }

    &:hover &__image-caption {
        transform: translate(-50%,-50%);
        opacity: 1;
    }

    &__heading {
        margin-bottom: 1rem;
        font-weight: 700;
        text-transform: uppercase;
    }
}
</style>