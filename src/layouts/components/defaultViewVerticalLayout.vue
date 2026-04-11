<script setup>
import Header from './header.vue';
import Footer from './footer.vue';
</script>
<template>
    <div style="width: 100%;">
        <Header />

        <main id="body-page">
            <RouterView></RouterView>
        </main>

        <Footer />
    </div>
</template>

<style scoped>
#body-page{
    margin: 0 auto;
    width: 65%;
    height: 100%;
    margin-bottom: 50px

}

/* 1000px or down */
@media screen and (max-width: 1024px) {
    #body-page{
        width: 95%;
    };
}
</style>