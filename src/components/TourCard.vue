<template>
    <div class="tour-card">
        <div class="tour-card__side tour-card__side--front">
            <div :class="`tour-card__picture tour-card__picture--${colorClassName}`"></div>
            <h4 class="tour-card__heading">
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
            <h1>BACK</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'color-scheme': String,
        'title': String,
        'num-of-days': Number,
        'num-of-people': Number,
        'num-of-guides': Number,
        'sleep-in': String,
        'difficulty': String
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
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

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
        transition: all 1s ease;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 15px 40px transparentize($color-black, 0.85);;

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
                $color-light-transparent: transparentize($color-light, 0.15);
                $color-dark-transparent: transparentize($color-dark, 0.15);
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
}
</style>