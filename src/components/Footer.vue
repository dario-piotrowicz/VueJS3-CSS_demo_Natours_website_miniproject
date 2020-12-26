<template>
    <footer class="footer">
        <div class="footer__logo-container">
            <img src="../assets/images/logo.png" alt="Full Logo" class="footer_logo">
        </div>
        <div class="grid">
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__navigation-list">
                            <li class="footer__navigation-list-item"><a href="#" class="footer__navigation_link">Company</a></li>
                            <li class="footer__navigation-list-item"><a href="#" class="footer__navigation_link">Contact us</a></li>
                            <li class="footer__navigation-list-item"><a href="#" class="footer__navigation_link">Carrers</a></li>
                            <li class="footer__navigation-list-item"><a href="#" class="footer__navigation_link">Privacy policy</a></li>
                            <li class="footer__navigation-list-item"><a href="#" class="footer__navigation_link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        Build by <a href="https://github.com/dario-piotrowicz" target="_blank" class="footer__navigation_link">Dario Piotrowicz</a> following
                        <a href="https://www.udemy.com/user/jonasschmedtmann" target="_blank" class="footer__navigation_link">Jonas Schmedtmann</a>'s instructions presented in his udemy course
                        <a href="https://www.udemy.com/course/advanced-css-and-sass" target="_blank" class="footer__navigation_link">Advanced CSS and Sass</a>. Copyright &copy; by Jonas Schmedtmann.
                        You are 100% allowed to use this webpage for both personal and commercial use, but not to claim it as your own
                        design. A credit to the original author, Jonas Schmedtmann, is of course higly appreciated!
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: black;
    color: white;
    text-align: center;
}
</style>