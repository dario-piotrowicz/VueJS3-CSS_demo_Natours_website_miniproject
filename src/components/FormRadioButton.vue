<template>
        <div class="form-radio">
        <input class="form-radio__input" type="radio" :id="formRadioId" :name="name">
        <label class="form-radio__label" :for="formRadioId">{{ label }}</label>
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
.form-radio {
    &__input {
        color: red;
    }

    &__label {
        color: blue;
    }
}
</style>>