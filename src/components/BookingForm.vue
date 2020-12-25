<template>
    <form action="#" class="booking-form">
        <h2 class="section-heading booking-form__heading">Start booking now!</h2>
        <form-text-input type="text" placeholder="Full Name" label="Full Name" id="name" :isRequired="true"></form-text-input>
        <form-text-input type="email" placeholder="Email Address" label="Email Address" id="email" :isRequired="true"></form-text-input>
        <div class="booking-form__radio-buttons-container">
            <form-radio-button label="Small tour group" name="tour-size"></form-radio-button>
            <form-radio-button label="Large tour group" name="tour-size"></form-radio-button>
        </div>
    </form>
</template>

<script>
import FormTextInput from './FormTextInput';
import FormRadioButton from './FormRadioButton';

export default {
    components: {
        "form-text-input": FormTextInput,
        "form-radio-button": FormRadioButton
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
    }
}
</style>