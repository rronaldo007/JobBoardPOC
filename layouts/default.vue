<template>
    <div class="container">
        <Header/>
        <!-- page content output-->
        <main>
            <slot />
        </main>

        <footer>
            <p>&copy; 2023 Job Junction</p>
        </footer>
    </div>
</template>
<style scoped >
    .container {
        display: grid;
        min-height: 100vh;
        min-height: 100dvh;

        grid-template-rows: auto 1fr auto;
    }
</style>