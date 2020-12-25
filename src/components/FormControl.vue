<template>
    <div class="form-control">
        <input class="form-control__input" :type="type" :placeholder="placeholder" :id="formControlId" required autocomplete="off">
        <label class="form-control__label" :for="formControlId">{{ label }}</label>
    </div>
</template>

<script>

const createId = (minLength, maxLength) => {
    let id  = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = ( Math.random() * (maxLength + 1 - minLength) ) + minLength;
    for ( let i = 0; i < idLength; i++ ) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}

export default {
    props: {
        type: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: ""
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
        this.defaultFormControlId = `form-control-id-${createId(minLength,maxLength)}`;
    },
    computed: {
        formControlId: function(){
            return this.id || this.defaultFormControlId;
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';

.form-control {
    &:not(:last-child){
        margin-bottom: 2rem;
    }

    &__input {
        display: block;
        width: 90%;
        color: inherit;
        font-family: inherit;
        font-size: 1.5rem;
        padding: 1.5rem 2rem;
        border: none;
        border-radius: 2px;
        background-color: transparentize($color-white, 0.5);
        border-bottom: 3px solid transparent;

        &:focus {
            outline: none;
            box-shadow: 0 1rem 2rem transparentize($color-black, 0.9);
            border-bottom: 3px solid $color-primary;

            &:invalid {
                border-bottom: 3px solid #FA7131;
            }
        }

        &::-webkit-input-placeholder {
            color: #a9a9a9;
        }
    }
}
</style>