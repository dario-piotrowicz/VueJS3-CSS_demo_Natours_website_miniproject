<template>
    <form action="#" class="booking-form">
        <h2 class="section-heading booking-form__heading">Start booking now!</h2>
        <form-text-input type="text" placeholder="Full Name" label="Full Name" id="name" :isRequired="true"></form-text-input>
        <form-text-input type="email" placeholder="Email Address" label="Email Address" id="email" :isRequired="true"></form-text-input>
        <div class="booking-form__radio-buttons-container">
            <form-radio-button label="Small tour group" name="tour-size" :checked="true"></form-radio-button>
            <form-radio-button label="Large tour group" name="tour-size"></form-radio-button>
        </div>
        <animated-link-or-button color-scheme="green" :isButton="true">Next Step<span class="arrow">&rarr;</span></animated-link-or-button>
    </form>
</template>

<script>
import FormTextInput from './FormTextInput';
import FormRadioButton from './FormRadioButton';
import AnimatedLinkOrButton from './AnimatedLinkOrButton';

export default {
    components: {
        "form-text-input": FormTextInput,
        "form-radio-button": FormRadioButton,
        "animated-link-or-button": AnimatedLinkOrButton
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/media-queries.scss';

.booking-form {
    &__heading {
        font-size: 2.5rem;
        margin-bottom: 5rem;
    }

    &__radio-buttons-container {
        width: 90%;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 5rem;
        text-align: center;

        @include natours-mq(tablet-portrait) {
            flex-direction: column;
            height: 6.5rem;
            justify-content: space-between;
            margin-left: 1.5rem;
            text-align: left;
        }
    }

    .arrow {
        line-height: 0;
        font-size: 3.1rem;
    }
}

</style>