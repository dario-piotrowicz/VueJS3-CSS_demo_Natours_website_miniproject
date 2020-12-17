<template>
    <div class="tour-card">
        <div class="tour-card__side tour-card__side--front">
            <h1>FRONT</h1>
        </div>
        <div class="tour-card__side tour-card__side--back">
            <h1>BACK</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tour-card {
    position: relative;
    perspective: 1500px;
    height: 50rem;

    &__side {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        backface-visibility: hidden;
        height: 50rem;
        transition: all 1s ease;

        &--front {
            color: black;
            background-color: green;
        }

        &--back {
            color: black;
            background-color:indianred;
            transform: rotateY(180deg);
        }
    }

    &:hover > &__ {
        &side {
            &--front {
                transform: rotateY(180deg);
            }
            &--back {
                transform: rotateY(360deg);
            }
        }
    }
}
</style>