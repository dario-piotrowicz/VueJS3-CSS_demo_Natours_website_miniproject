<template>
    <div class="form-radio">
        <input class="form-radio__input" type="radio" :id="formRadioId" :name="name">
        <label class="form-radio__label" :for="formRadioId">
            <span class="form-radio__radio-button"></span>
            {{ label }}
        </label>
    </div>
</template>

<script>
import { createId } from '../utils/functions';

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        id: {
            type: String
        }
    },
    created: function(){
        const minLength = 5;
        const maxLength = 25;
        this.formRadioId = `form-radio-id-${createId(minLength,maxLength)}`;
    },
    computed: {
        formControlId: function(){
            return this.id || this.formRadioId;
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.form-radio {
    &__input {
        display: none;
    }

    &__label {
        cursor: pointer;
        position: relative;
        padding-left: 3.5rem;
    }

    &__radio-button {
        display: inline-block;
        $size: 3rem;
        height: $size;
        width: $size;
        border: 5px solid $color-primary;
        border-radius: 50%;
        position: absolute;
        top: -.5rem;
        left: 0;

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            display: inline-block;
            $size: 1.2rem;
            height: $size;
            width: $size;
            background-color: $color-primary;
            border-radius: 50%;
            opacity: 0;
            transition: opacity .2s;
        }
    }

    &__input:checked + &__label > &__radio-button::after {
        opacity: 1;
    }

}
</style>>