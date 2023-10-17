<template>
    <div class="custom-container">
        <Header/>
        <!-- page content output-->
        <main class="bg-slate-200">
            <slot />
        </main>

        <Footer/>
    </div>
</template>
<style scoped >
    .custom-container {
        display: grid;
        min-height: 100vh;
        min-height: 100dvh;

        grid-template-rows: auto 1fr auto;
    }
</style>