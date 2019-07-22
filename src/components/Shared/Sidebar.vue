<template>

    <div id="sidebar">

        <div id="logo">

            <img src="@/assets/images/logo-green copy.png"></img>

            <div class="text">JAT<em>HEON</em> <span class="cloud">cloud</span></div>

        </div>

        <nav>

            <ul>

                <li v-bind:class="{ active: pageName == 'dashboard' }">
                    <i class="fas fa-align-left"></i>
                    <router-link :to="{ name: 'dashboard' }"> &nbsp; Dashboard</router-link>
                </li>

                <li v-bind:class="{ active: pageName == 'search' }">
                    <i class="fas fa-search"></i>
                    <router-link :to="{ name: 'search' }"> &nbsp; Search</router-link>
                </li>

                <li v-bind:class="{ active: pageName == 'savedSearches' }">
                    <i class="fas fa-save"></i>
                    <router-link :to="{ name: 'savedSearches' }"> &nbsp; Saved Searches</router-link>
                </li>

                <li v-bind:class="{ active: pageName == 'clipboard' }">
                    <i class="fas fa-clipboard"></i>
                    <router-link :to="{ name: 'clipboard' }"> &nbsp; Clipboard</router-link>
                </li>

                <li v-bind:class="{ active: pageName == 'recentSearches' }">
                    <i class="fas fa-search"></i>
                    <router-link :to="{ name: 'recentSearches' }"> &nbsp; Recent Searches</router-link>
                </li>

                <li v-bind:class="{ active: pageName == 'keywords' }">
                    <i class="fas fa-font"></i>
                    <router-link :to="{ name: 'keywords' }"> &nbsp; Keywords</router-link>
                </li>

                <li v-bind:class="{ active: pageName == 'tagManager' }">
                    <i class="fas fa-tag"></i>
                    <router-link :to="{ name: 'tagManager' }"> &nbsp; Tag Manager</router-link>
                </li>

                <li v-bind:class="{ active: pageName == 'settings' }">
                    <i class="fas fa-cog"></i>
                    <router-link :to="{ name: 'settings' }"> &nbsp; Settings</router-link>
                    <!--chevron-down-->
                </li>

            </ul>

        </nav>

    </div>

</template>

<script>
    export default {
        computed: {
            pageName() {
                return this.$route.name;
            }
        }
    }
</script>
