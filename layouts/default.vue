<template>
    <div>
        <header>
            <nav>
                <h1 class="text-3xl font-bold underline">
                    <nuxt-link to="/">Job Junction</nuxt-link></h1>
                <ul>
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- page content output-->
        <div>
            <slot />
        </div>

        <footer>
            <p>&copy; 2023 Job Junction</p>
        </footer>
    </div>

</template>