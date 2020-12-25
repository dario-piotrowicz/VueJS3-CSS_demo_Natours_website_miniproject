<template>
    <form action="#" class="booking-form">
        <h2 class="section-heading booking-form__heading">Start booking now!</h2>
        <form-control type="text" placeholder="Full Name" label="Full Name" id="name" :isRequired="true"></form-control>
        <form-control type="email" placeholder="Email Address" label="Email Address" id="email" :isRequired="true"></form-control>
        <form-radio-button label="Small tour group" name="tour-size"></form-radio-button>
        <form-radio-button label="Large tour group" name="tour-size"></form-radio-button>
    </form>
</template>

<script>
import FormControl from './FormControl';
import FormRadioButton from './FormRadioButton';

export default {
    components: {
        "form-control": FormControl,
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
}
</style>