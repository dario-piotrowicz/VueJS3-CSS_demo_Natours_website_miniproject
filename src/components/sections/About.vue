<template>
    <section class="about">
        <div class="text-centering-container">
            <h2 class="section-heading">Exciting tours for adventurous people</h2>
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
                    <text-link-button href="#" text="Learn more"></text-link-button>
                </div>
                <div class="col-1-of-2 about-images-composition">
                    <img v-for="(imgData,index) in imagesData"
                        :key="`composition-img-${index}`"
                        :srcset="`${imgData.lowResImgSrc} 300w , ${imgData.imgSrc} 1000w`"
                        sizes="(max-width: 900px) 20vw , (max-width: 600px) 30vw, 50vw"
                        :alt="imgData.alt"
                        :class="`about-images-composition__image about-images-composition__image--${imgData.imgClassModifier}`"
                        :src="imgData.imgSrc"
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TextLinkButton from '../TextLinkButton';

export default {
    components: {
        "text-link-button": TextLinkButton
    },
    data: function(){
        return {
            imagesData: [
                {
                    imgSrc: require('../../../src/assets/images/about/nat-1.jpg'),
                    lowResImgSrc: require('../../../src/assets/images/about/nat-1_low-res.jpg'),
                    alt: "Nature Picture 1",
                    imgClassModifier: "first"
                },
                {
                    imgSrc: require('../../../src/assets/images/about/nat-2.jpg'),
                    lowResImgSrc: require('../../../src/assets/images/about/nat-2_low-res.jpg'),
                    alt: "Nature Picture 2",
                    imgClassModifier: "second"
                },
                {
                    imgSrc: require('../../../src/assets/images/about/nat-3.jpg'),
                    lowResImgSrc: require('../../../src/assets/images/about/nat-3_low-res.jpg'),
                    alt: "Nature Picture 3",
                    imgClassModifier: "third"
                }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/media-queries.scss';

.about {
    background-color: $bg-color-neutral-light;
    padding: 35rem 5rem 40rem;
    margin-top: -20rem;

    @include natours-mq(tablet-portrait) {
        padding: 23rem 5rem 50rem;
    }
    @include natours-mq(phone) {
        padding-bottom: 48rem;
    }

    &-text-content {
        font-size: 1.6rem;

        &__heading {
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: .7rem;
        }
        &__paragraph:not(:last-child) {
            margin-bottom: 3.8rem;
        }
    }

    &-images-composition {
        position: relative;

        &__image {
            width: 55%;
            box-shadow: 0 15px 40px transparentize($color-black, .6);
            border-radius: 2px;
            position: absolute;
            z-index: 10;
            transition: transform .2s, box-shadow .2s, outline .2s, outline-offset .3s;

            &--first {
                left: 0;
                top: -2rem;
            }

            &--second {
                right: 0;
                top: 2rem;
            }

            &--third {
                left: 20%;
                top: 10rem;
            }

            &:hover {
                transform: scale(1.1) translate(-5px);
                box-shadow: 0 25px 50px transparentize($color-black, .73);
                z-index: 20;
                outline: 1.5rem solid $color-primary;
                outline-offset: 2rem;
            }
        }

        &:hover &__image:not(:hover){
            transform: scale(.8);
        }
    }

}
</style>