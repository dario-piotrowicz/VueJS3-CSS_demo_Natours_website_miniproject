<template>
    <footer class="footer">
        <div class="footer__logo-container">
            <img src="../assets/images/logo.png" alt="Full Logo" class="footer__logo">
        </div>
        <div class="grid">
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__navigation-list">
                            <li class="footer__navigation-list-item"><a href="#" class="footer__link">Company</a></li>
                            <li class="footer__navigation-list-item"><a href="#" class="footer__link">Contact us</a></li>
                            <li class="footer__navigation-list-item"><a href="#" class="footer__link">Carrers</a></li>
                            <li class="footer__navigation-list-item"><a href="#" class="footer__link">Privacy policy</a></li>
                            <li class="footer__navigation-list-item"><a href="#" class="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        Webpage built by <a href="https://github.com/dario-piotrowicz" target="_blank" class="footer__link footer__link--italic">Dario Piotrowicz</a> following
                        <a href="https://www.udemy.com/user/jonasschmedtmann" target="_blank" class="footer__link footer__link--italic">Jonas Schmedtmann</a>'s instructions presented in his udemy course
                        <a href="https://www.udemy.com/course/advanced-css-and-sass" target="_blank" class="footer__link footer__link--italic">Advanced CSS and Sass</a>. Copyright &copy; by Jonas Schmedtmann.
                        You are 100% allowed to use this webpage for both personal and commercial use, but not to claim it as your own
                        design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '/src/assets/styles/constants/colors.scss';

.footer {
    $background-color: #333;
    $text-color: #f0f0f0;
    background-color: $background-color;
    padding: 10rem;
    font-size: 1.4rem;
    color: $text-color;


    &__logo {
        &-container {
            text-align: center;
            margin-bottom: 8rem;
        }
        width: 15rem;
    }

    &__navigation {
        border-top: 1px solid transparentize($text-color,.5);
        padding-top: 2rem;
        display: inline-block;

        &-list{
            list-style: none;
            &-item {
                display: inline-block;
                &:not(:last-child){
                    margin-right: 1.5rem;
                }
            }
        }
    }

    &__link {
        &:link,
        &:visited {
            color: $text-color;
            text-decoration: none;
            text-transform: uppercase;
            display: inline-block;
            transition: transform .2s, color .2s;
        }

        &:hover,
        &:active {
            color: $color-primary;
            background-color: $background-color;
            box-shadow: 0 1rem 2rem transparentize($color-black, .6);
            transform: rotate(5deg) scale(1.3);
            font-style: inherit;
        }

        &--italic {
            font-style: italic;
        }
    }

    &__copyright {
        border-top: 1px solid transparentize($text-color,.5);
        padding-top: 2rem;
        width: 80%;
        float: right;
    }

}
</style>