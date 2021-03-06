<template>
    <div class="form-text">
        <input class="form-text__input" :type="type" :placeholder="placeholder" :id="formTextId" :required="isRequired" autocomplete="off">
        <label class="form-text__label" :for="formTextId">{{ label }}</label>
    </div>
</template>

<script>
import { createId } from '../utils/functions';

export default {
    props: {
        type: {
            type: String,
            required: true,
            validator: (value) => {
                const allowedTypes = [
                    "text",
                    "email",
                    "password",
                    "number",
                ];
                return allowedTypes.includes(value);
            }
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
        },
        isRequired: {
            type: Boolean,
            default: false
        }
    },
    created: function(){
        const minLength = 5;
        const maxLength = 25;
        this.defaultFormTextId = `form-text-id-${createId(minLength,maxLength)}`;
    },
    computed: {
        formTextId: function(){
            return this.id || this.defaultFormTextId;
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/constants/colors.scss';
@import 'src/assets/styles/utils/media-queries.scss';

.form-text {
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
        transition: box-shadow .3s, border-bottom .3s;

        @include natours-mq(phone) {
            width: 100%;
        }

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

    &__label {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: .7rem;
        display: block;
        transition: opacity .3s, visibility .3s, transform .3s;
    }

    &__input:placeholder-shown + &__label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem) scaleY(2);
    }
}
</style>