<template>
    <form action="#" class="booking-form">
        <h2 class="section-heading booking-form__heading">Start booking now!</h2>
        <form-text-input type="text" placeholder="Full Name" label="Full Name" id="name" :isRequired="true"></form-text-input>
        <form-text-input type="email" placeholder="Email Address" label="Email Address" id="email" :isRequired="true"></form-text-input>
        <div class="booking-form__radio-buttons-container">
            <form-radio-button label="Small tour group" name="tour-size"></form-radio-button>
            <form-radio-button label="Large tour group" name="tour-size"></form-radio-button>
        </div>
        <animated-link-button color-scheme="green" :isButton="true">Next Step<span class="arrow">&rarr;</span></animated-link-button>
    </form>
</template>

<script>
import FormTextInput from './FormTextInput';
import FormRadioButton from './FormRadioButton';
import AnimatedLinkButton from './AnimatedLinkButton';

export default {
    components: {
        "form-text-input": FormTextInput,
        "form-radio-button": FormRadioButton,
        "animated-link-button": AnimatedLinkButton
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

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
    }

    .arrow {
        line-height: 0;
        font-size: 3.1rem;
    }
}

</style>