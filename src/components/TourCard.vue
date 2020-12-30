<template>
    <div class="tour-card">
        <div class="tour-card__side tour-card__side--front">
            <div :class="`tour-card__picture tour-card__picture--${colorClassName}`"></div>
            <h4 v-if="title" class="tour-card__heading">
                <span :class="`tour-card__title tour-card__title--${colorClassName}`"> {{ title }} </span>
            </h4>
            <div class="tour-card__details">
                <ul>
                    <li>{{ numOfDays }} day tours</li>
                    <li>Up to {{ numOfPeople }} people</li>
                    <li>{{ numOfGuides }} tour guides</li>
                    <li>Sleep in {{ sleepIn }}</li>
                    <li>Difficulty: {{ difficulty }}</li>
                </ul>
            </div>
        </div>
        <div :class="`tour-card__side tour-card__side--back tour-card__side--back--${colorClassName}`">
            <div class="tour-card__call-to-action">
                <div class="tour-card__price-box">
                    <p class="tour-card__price-only">Only</p>
                    <p class="tour-card__price-value">${{ price }}</p>
                </div>
                <div class="tour-card__book-now-button-container">
                <animated-link-or-button :isButton="true" @click="$emit('book-now-click')">Book Now!</animated-link-or-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AnimatedLinkOrButton from './AnimatedLinkOrButton';

const possibleColorSchemes = [
    'orange',
    'green',
    'blue'
];

const possibleDifficulties = [
    'easy',
    'medium',
    'hard'
];

const isValidNumber = (value,min,max) => value > min && value < max;

export default {
    props: {
        'color-scheme': {
            type: String,
            required: true,
            validator: value => possibleColorSchemes.includes(value)
        },
        'title': {
            type: String,
            default: ''
        },
        'num-of-days': {
            type: Number,
            required: true,
            validator: value => isValidNumber(value, 0, 10)
        },
        'num-of-people': {
            type: Number,
            required: true,
            validator: value => isValidNumber(value, 0, 50)
        },
        'num-of-guides': {
            type: Number,
            required: true,
            validator: value => isValidNumber(value, 0, 10)
        },
        'sleep-in': {
            type: String,
            required: true
        },
        'difficulty': {
            type: String,
            required: true,
            validator: value => possibleDifficulties.includes(value)
        },
        price: {
            type: Number,
            required: true,
            validator: value => isValidNumber(value, 0, 1500)
        }
    },
    computed : {
        colorClassName: function(){
            const colorSchemeMap = {
                'orange': 'orange',
                'green': 'green',
                'blue': 'blue'
            };
            const colorScheme = this.colorScheme;
            if(colorScheme && colorSchemeMap[colorScheme]){
                return colorSchemeMap[colorScheme];
            } else {
                return '';
            }
        }
    },
    components: {
        'animated-link-or-button': AnimatedLinkOrButton
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/media-queries.scss';

.tour-card {
    $green-scheme-color-light: $color-primary-lighter;
    $green-scheme-color-dark: $color-primary-darker;

    $orange-scheme-color-light: #ffb900;
    $orange-scheme-color-dark: #ff7730;

    $blue-scheme-color-light: #2998ff;
    $blue-scheme-color-dark: #1502c0;

    position: relative;
    perspective: 1500px;
    height: 52rem;

    &__side {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        backface-visibility: hidden;
        height: 52rem;
        transition: transform 1s ease;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 15px 40px transparentize($color-black, .85);

        &--back {
            transform: rotateY(180deg);

            &--orange {
                background: linear-gradient(to right bottom, $orange-scheme-color-light, $orange-scheme-color-dark);
            }
            &--green {
                background: linear-gradient(to right bottom, $green-scheme-color-light, $green-scheme-color-dark);
            }
            &--blue {
                background: linear-gradient(to right bottom, $blue-scheme-color-light, $blue-scheme-color-dark);
            }
        }
    }

    &:hover > &__ {
        &side {
            &--front {
                transform: rotateY(-180deg);
            }
            &--back {
                transform: rotateY(0deg);
            }
        }
    }

    &__picture {
        background-size: cover;
        height: 23rem;
        background-blend-mode: screen;
        clip-path: polygon(-1% -1%, 101% -1%, 101% 85%, -1% 100%);

        &--orange {
            background-image:
                linear-gradient(to right bottom, $orange-scheme-color-light, $orange-scheme-color-dark),
                url('../assets/images/tours/orange-card-bg.jpg');
        }

        &--green {
            background-image:
                linear-gradient(to right bottom, $green-scheme-color-light, $green-scheme-color-dark),
                url('../assets/images/tours/green-card-bg.jpg');
        }

        &--blue {
            background-image:
                linear-gradient(to right bottom, $blue-scheme-color-light, $blue-scheme-color-dark),
                url('../assets/images/tours/blue-card-bg.jpg');
        }
    }

    &__heading {
        font-size: 2.8rem;
        font-weight: 300;
        text-transform: uppercase;
        color: $color-white;
        position: absolute;
        top: 12rem;
        right: 3rem;
        text-align: right;
        width: 65%;

        .tour-card__title {
            padding: 1rem 1.5rem;
            box-decoration-break: clone;

            @function title-background-image($color-light,$color-dark){
                $color-light-transparent: transparentize($color-light, .15);
                $color-dark-transparent: transparentize($color-dark, .15);
                @return linear-gradient(to right bottom, $color-light-transparent, $color-dark-transparent);
            }

            &--orange {
                background-image: title-background-image($orange-scheme-color-light, $orange-scheme-color-dark);
            }

            &--green {
                background-image: title-background-image($green-scheme-color-light, $green-scheme-color-dark);
            }

            &--blue {
                background-image: title-background-image($blue-scheme-color-light, $blue-scheme-color-dark);
            }
        }
    }

    &__details {
        padding: 3rem;

        ul {
            list-style: none;
            width: 80%;
            margin: auto;
        }

        li {
            text-align: center;
            font-size: 1.5rem;
            padding: 1rem;

            &:not(:last-child){
                border-bottom: 1px solid $color-light-gray;
            }
        }
    }

    &__call-to-action {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
    }

    &__price-box {
        color: $color-white;
        margin-bottom: 8rem;
    }

    &__price-only {
        font-size: 1.4rem;
        text-transform: uppercase;
    }

    &__price-value {
        font-size: 6rem;
        font-weight: 100;
    }

    @include natours-mq(tablet-landscape) {
        height: auto;
        border-radius: 3px;
        overflow: hidden;
        background-color: $color-white;
        box-shadow: 0 15px 40px transparentize($color-black, .85);

        &__side {
            box-shadow: none;
            height: auto;
            position: relative;

            &--back {
                transform: rotateY(0);
                clip-path: polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%);
            }
        }

        &:hover > &__side {
            transform: rotateY(0);
        }

        &__call-to-action {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
            padding: 4rem;
        }

        &__price-box {
            margin-bottom: 3rem;
        }

        &__details {
            padding-top: .5rem;
            padding-bottom: .5rem;
        }

        &__price-value {
            line-height: 1;
            font-size: 5rem;
        }
    }
}
</style>