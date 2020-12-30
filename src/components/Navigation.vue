<template>
    <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navigation-hidden-checkbox">
        <label for="navigation-hidden-checkbox" class="navigation__button">
            <span class="navigation__icon"></span>
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
@import 'src/assets/styles/utils/media-queries.scss';

.navigation {
    $button-size: 7rem;
    $button-displacement: 6rem;
    $button-small-displacement: 3rem;
    $button-very-small-displacement: 2rem;

    &__checkbox {
        display: none;
    }

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
        box-shadow: 0 1rem 3rem transparentize($color-black, .7);
        text-align: center;
        cursor: pointer;

        @include natours-mq(tablet-portrait) {
            top: $button-small-displacement;
            right: $button-small-displacement;
        }
        @include natours-mq(phone) {
            top: $button-very-small-displacement;
            right: $button-very-small-displacement;
        }
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
        transition: transform .8s cubic-bezier(0,.72,.74,.92);

        @include natours-mq(tablet-portrait) {
            top: $button-small-displacement  + .5rem;
            right: $button-small-displacement  + .5rem;
        }
        @include natours-mq(phone) {
            top: $button-very-small-displacement  + .5rem;
            right: $button-very-small-displacement  + .5rem;
        }
    }

    &__menu {
        height: 100vh;
        width: 0;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1001;
        opacity: 0;
        transition: width 0.1s 1s, opacity .8s;
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

    &__checkbox:checked ~ &__menu {
        width: 100%;
        opacity: 1;
        transition: width 0.1s 0.1s, opacity .8s 0.2s;
    }

    &__checkbox:checked ~  &__background {
        transform: scale(80);
        transition: transform .8s cubic-bezier(0.86, 0, 0.3, 1);
    }

    &__icon {
        margin-top: ( $button-size / 2 ) - .1rem;
        position: relative;

        &,
        &::before,
        &::after {
            display: inline-block;
            width: 3rem;
            height: 2px;
            background-color: #333;
        }

        &::before,
        &::after {
            content: '';
            position: absolute;
            left: 0;
            transition: top .2s, transform .2s;
        }

        &::before {
            top: -.8rem;
        }
        &::after {
            top: .8rem;
        }
    }

    &__button:hover &__icon {
        &::before {
            top: -1rem;
        }
        &::after {
            top: 1rem;
        }
    }

    &__checkbox:checked + &__button &__icon {
        background-color: transparent;

        &::before,
        &::after {
            top: 0;
        }

        &::before {
            transform: rotate(135deg);
        }
        &::after {
            transform: rotate(-135deg)
        }
    }
}
</style>