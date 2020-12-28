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
                    <a href="#" class="navigation__link">
                        <span class="navigation__list-item-enumeration">01</span> About Natours
                    </a>
                </li>
                <li class="navigation__list-item">
                    <a href="#" class="navigation__link">
                        <span class="navigation__list-item-enumeration">02</span> Your benefits
                    </a>
                </li>
                <li class="navigation__list-item">
                    <a href="#" class="navigation__link">
                        <span class="navigation__list-item-enumeration">03</span> Popular tours
                    </a>
                </li>
                <li class="navigation__list-item">
                    <a href="#" class="navigation__link">
                        <span class="navigation__list-item-enumeration">04</span> Stories
                    </a>
                </li>
                <li class="navigation__list-item">
                    <a href="#" class="navigation__link">
                        <span class="navigation__list-item-enumeration">05</span> Book now
                    </a>
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
        z-index: 1002;
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
        transform: scale(80);
}

    &__menu {
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1001;
    }

    &__list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        list-style: none;
        text-align: center;

        &-item {
            margin: 1rem;

            &-enumeration {
                display: inline-block;
                margin-right: 1.5rem;
            }
        }
    }

    &__link {
        &:link,
        &:visited {
            display: inline-block;
            font-size: 3rem;
            font-weight: 300;
            text-decoration: none;
            text-transform: uppercase;
            color: $color-white;
            padding: 1rem 2rem;
            background-size: 230%;
            background-image: linear-gradient(120deg, transparent 0%, transparent 49.9%, $color-white 50%);
            transition: background-position .4s, color .4s, transform .4s;
        }

        &:hover,
        &:active {
            background-position: 100%;
            color: $color-primary;
            transform: translateX(1rem);
        }
    }

}
</style>