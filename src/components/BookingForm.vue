<template>
    <form action="#" class="booking-form">
        <h2 class="section-heading booking-form__heading">Start booking now!</h2>
        <form-control type="text" placeholder="Full Name" label="Full Name" id="name"></form-control>
        <form-control type="email" placeholder="Email Address" label="Email Address" id="email"></form-control>
    </form>
</template>

<script>
import FormControl from './FormControl';

export default {
    components: {
        "form-control": FormControl
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