<template>
    <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navigation-hidden-checkbox">
        <label for="navigation-hidden-checkbox" class="navigation__button">
            MENU
        </label>
        <div class="navigation__background"></div>
        <nav class="navigation__menu">
            <ul class="navigation__list">
                <li class="navigation__list-item">
                    <a href="#" class="navigation__link">About Natours</a>
                </li>
                <li class="navigation__list-item">
                        <a href="#" class="navigation__link">Your benefits</a>
                </li>
                <li class="navigation__list-item">
                        <a href="#" class="navigation__link">Popular tours</a>
                </li>
                <li class="navigation__list-item">
                        <a href="#" class="navigation__link">Stories</a>
                </li>
                <li class="navigation__list-item">
                        <a href="#" class="navigation__link">Book now</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.navigation {
    $button-size: 7rem;
    $button-displacement: 6rem;

    &__button {
        display: block;
        width: $button-size;
        height: $button-size;
        position: fixed;
        top: $button-displacement;
        right: $button-displacement;
        background-color: $color-white;
        border-radius: 50%;
        z-index: 1001;
    }

    &__background {
        $size: $button-size - 1rem;
        $displacement: $button-displacement + .5rem;
        position: fixed;
        top: $displacement;
        right: $displacement;
        height: $size;
        width: $size;
        border-radius: 50%;
        background: radial-gradient($color-primary-lighter, $color-primary-darker);
        z-index: 1000;
    }

}
</style>