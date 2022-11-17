<script setup lang="ts">

</script>;

<template>
    <section class="hero">
        <div class="container-responsive container-content">
            <div class="content">
                <h1>Come along on a journey to space.</h1>
                <p>Join the adventure. Tickets for next shuttle still available.</p>
                <button>Book now</button>
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../scss/common/variables/colors';
@use '../../scss/common/utils/breakpoints';

.hero {
    width: 100%;
    height: 75vh;
    background-image: url(../../assets/images/actionvance-t7EL2iG3jMc-unsplash-flipped.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .container-content {

        display: flex;
        align-items: center;
        height: 80%;
        color: white;
        padding: 0 1.5rem;

        .content {
            h1 {
                margin: 0 0 2rem 0;
                font-size: 4rem;
                max-width: 50%;
                line-height: 4rem;
            }

            p {
                margin: 0 0 3rem 0;
                font-weight: 700;
            }

            button {
                padding: 1rem;
                color: black;
                background-color: white;
                font-weight: 700;
                font-size: 1.3rem;
            }

        }
    }
}
</style>