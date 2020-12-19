<template>
    <div class="feature-card">
        <i :class="`feature-card__icon icon-${iconClass}`"></i>
        <h3 class="feature-card__heading">{{ title }}</h3>
        <div class="feature-card__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        iconClass: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.feature-card {
        background: transparentize($color-white, 0.2);
        font-size: 1.5rem;
        padding: 2.5rem;
        text-align: center;
        border-radius: 3px;
        box-shadow: 0 15px 40px transparentize($color-black, 0.77);;
        transition: transform .3s;

        &:hover {
            transform: translateY(-2rem) scale(1.1);
        }

        &__icon {
            font-size: 6rem;
            padding-top: 3px;
            margin-bottom: 5px;
            display: inline-block;
            background-image: linear-gradient(to right, darken($color-primary-lighter,18%), $color-primary-darker);
            background-clip: text;
            color: transparent;
        }

        &__heading {
            margin-bottom: 1rem;
            font-weight: 700;
            text-transform: uppercase;
        }
}
</style>