<template>
    <div class="form-control">
        <input class="form-control__input" :type="type" :placeholder="placeholder" :id="formControlId" required>
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
</style>