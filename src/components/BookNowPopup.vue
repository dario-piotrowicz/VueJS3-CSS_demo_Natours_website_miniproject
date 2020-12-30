<template>
    <div :class="`book-now-popup${ show ? ' book-now-popup--visible' : '' }`" @click="$emit('close')">
        <div class="book-now-popup__content-wrapper" @click="$event.stopPropagation()">
            <div class="book-now-popup__left-pane">
                <img src="../assets/images/tours/book-now-1.jpg" alt="Forest" class="book-now-popup__image">
                <img src="../assets/images/tours/book-now-2.jpg" alt="Man on mountain" class="book-now-popup__image">
            </div>
            <div class="book-now-popup__right-pane">
                <span class="book-now-popup__close-btn" @click="$emit('close')">&times;</span>
                <h2 class="section-heading book-now-popup__heading-primary">Start booking now</h2>
                <h3 class="book-now-popup__heading-secondary">Book now your fanstastic tour</h3>
                <p class="book-now-popup__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui corrupti quisquam repellat molestias natus asperiores suscipit,
                    ab dolor deserunt, iusto consequatur placeat dolores ullam consectetur quis. Porro esse nisi quibusdam.
                    Dolore necessitatibus, ipsa sit, nihil rem cum fuga molestiae explicabo adipisci cumque a.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorem omnis commodi minus quisquam explicabo, repellat optio quo magnam rerum.
                </p>
                <animated-link-or-button :isButton="true" @click="$emit('close')" color-scheme="green">
                    Book now
                </animated-link-or-button>
            </div>
        </div>
    </div>
</template>

<script>
import AnimatedLinkOrButton from './AnimatedLinkOrButton';

export default {
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    components: {
        "animated-link-or-button": AnimatedLinkOrButton
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/media-queries.scss';

.book-now-popup {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: transparentize($color-black, .7);
    backdrop-filter: blur(0);
    z-index: 9999;

    opacity: 0;
    visibility: hidden;

    transition: opacity .5s, backdrop-filter 1s;

    &--visible {
        opacity: 1;
        visibility: visible;
        backdrop-filter: blur(10px);
    }

    &__content-wrapper {
        display: table;
        background-color: $color-white;
        position: absolute;
        width: 75%;
        max-height: 80vh;
        top: 50%;
        left: 50%;
        opacity: 0;
        transform: translate(-50%, -50%) scale(.25);
        border-radius: 5px;
        box-shadow: 0 2rem 4rem transparentize($color-black, .8);
        overflow: hidden;
        transition: opacity .4s .2s, transform .4s .2s;
    }

    &--visible &__content-wrapper {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    &__left-pane {
        display: table-cell;
        width: 33.33333%;
        vertical-align: middle;
    }

    &__right-pane {
        display: table-cell;
        width: 66.66666%;
        vertical-align: middle;
        padding: 3rem 5rem;
    }

    &__image {
        display: block;
        width: 100%;
    }

    &__heading{
        &-primary {
            margin-bottom: 1.5rem;
            font-weight: 700;
        }
        &-secondary {
            margin-bottom: 1rem;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    &__close-btn {
        position: absolute;
        top: 1rem;
        right: 2rem;
        font-size: 4rem;
        cursor: pointer;
        line-height: 1;
        transition: color .3s;

        &:hover {
            color: $color-primary;
        }
    }

    &__text {
        font-size: 1.4rem;
        margin-bottom: 4rem;
        column-count: 2;
        column-gap: 4rem;
    }

    @include natours-mq(tablet-portrait) {
        &__left-pane {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 0;
            z-index: -1;
            transform: translateY(-50%);
            filter: opacity(0.1) brightness(250%) saturate(60%);
        }

        &__right-pane {
            width: 100%;
        }

        &__image {
            &:first-child {
                display: none;
            }
            display: block;
            width: 100%;
        }

        &__text {
            font-size: 1.5rem;
            margin-bottom: 3.5rem;
            column-count: 1;
        }
    }
    @include natours-mq(phone) {
        &__image {
            display: none;
        }
    }
}
</style>