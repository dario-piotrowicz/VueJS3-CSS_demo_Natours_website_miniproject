<template>
    <a :href="href" class="text-link-btn">{{text}}<span class="arrow">&rarr;</span>
    </a>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        href: String
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.text-link-btn {
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
        box-shadow: 0 10px 20px transparentize($color-black, .75);
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: 0 5px 10px transparentize($color-black, .75);
        transform: translateY(0);
    }
}
</style>