<template>
    <section class="about">
        <div class="text-centering-container">
            <h2 class="about__heading">Exciting tours for adventurous people</h2>
        </div>
        <div class="grid">
            <div class="row">
                <div class="col-1-of-2 about-text-content">
                    <h3 class="about-text-content__heading">
                        You're going to fall in love with nature
                    </h3>
                    <p class="about-text-content__paragraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Perspiciatis fugit quisquam voluptas fuga ab illo. Amet nostrum
                        tempora voluptas. Iure consequatur, perspiciatis voluptatem
                        possimus quis incidunt. Aperiam ea totam error?
                    </p>
                    <h3 class="about-text-content__heading">
                        Live adventures like you never have before
                    </h3>
                    <p class="about-text-content__paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis quae quas architecto, quibusdam dignissimos commodi.
                    </p>
                    <a href="#" class="btn-text">
                        Learn more <span class="arrow">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/containers.scss';

.about {
    background-color: $bg-color-neutral-light;
    padding: 25rem 0;
    margin-top: -15rem;

    &__heading {
        display: inline-block;
        font-size: 3.5rem;
        text-transform: uppercase;
        margin-bottom: 8rem;
        font-weight: 700;
        background-image: linear-gradient(to right, $color-primary-lighter, $color-primary-darker);
        background-clip: text;
        color: transparent;
        letter-spacing: 2px;
        transition: transform .2s, text-shadow .2s;

        &:hover {
            transform: skewY(2deg) skewX(15deg) scale(1.05);
            text-shadow: 5px 10px 20px transparentize($color-black, 0.65);
        }
    }

    &-text-content {
        font-size: 1.6rem;

        &__heading {
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 0.7rem;
        }
        &__paragraph:not(:last-child) {
            margin-bottom: 3.8rem;
        }

        .btn-text {
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
                box-shadow: 0 10px 20px transparentize($color-black, 0.75);
                transform: translateY(-2px);
            }

            &:active {
                box-shadow: 0 5px 10px transparentize($color-black, 0.75);
                transform: translateY(0);
            }
        }
    }
}
</style>