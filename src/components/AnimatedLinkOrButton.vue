<template>
  <button v-if="isButton" :class="`btn btn--${colorScheme}`"><slot></slot></button>
  <a v-else href="href" :class="`btn btn--${colorScheme}`"><slot></slot></a>
</template>

<script>
const possibleColorSchemes = [
    'green',
    'white'
];

export default {
  props: {
    href: String,
    'color-scheme': {
        type: String,
        default: 'white',
        validator: value => possibleColorSchemes.includes(value)
    },
    isButton:{
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang='scss' scoped>
@import 'src/assets/styles/constants/colors.scss';

.btn {
  font-size: 1.6rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: transform .1s, box-shadow .1s;
  position: relative;
  transform: translateY(0);
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 0 1rem 2rem transparentize($color-black, .77);

    &::after {
      transform: scaleX(1.4) scaleY(1.7);
      opacity: 0;
    }
  }

  &:active, &:focus {
    transform: translateY(-.1rem);
    box-shadow: 0 .5rem 1rem transparentize($color-black, .77);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: transform .4s, opacity .4s;
  }

  &--white {
    color: $color-medium-gray;
    background-color: $color-white;

    &::after {
      background-color: $color-white;
    }
  }

  &--green {
    color: $color-white;
    background-color: $color-primary;

    &::after {
      background-color: $color-primary;
    }
  }

}
</style>
