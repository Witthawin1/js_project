<template>
    <div>
        <div class="navbar bg-base-100 shadow-sm">
            <div class="flex-1">
                <RouterLink class="btn btn-ghost text-xl" to="/">daisyUI</RouterLink>
            </div>
            <div class="flex gap-2">
                <input v-model="searchText" @keydown="handleSearch" type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div class="card-body">
                            <span class="text-lg font-bold">8 Items</span>
                            <span class="text-info">Subtotal: $999</span>
                            <div class="card-actions">
                                <button class="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button v-if="!isLogged" @click="login()" class="btn btn-ghost">login</button>
                <div v-else class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <RouterLink :to="{name:'profile'}">Profile</RouterLink>
                        </li>
                        <li><a @click="logout()">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!--main content-->
        <slot></slot>

        <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10">
            <nav>
                <h6 class="footer-title">Services</h6>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 class="footer-title">Company</h6>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 class="footer-title">Legal</h6>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 class="footer-title">Social</h6>
                <a class="link link-hover">Twitter</a>
                <a class="link link-hover">Instagram</a>
                <a class="link link-hover">Facebook</a>
                <a class="link link-hover">GitHub</a>
            </nav>
            <nav>
                <h6 class="footer-title">Explore</h6>
                <a class="link link-hover">Features</a>
                <a class="link link-hover">Enterprise</a>
                <a class="link link-hover">Security</a>
                <a class="link link-hover">Pricing</a>
            </nav>
            <nav>
                <h6 class="footer-title">Apps</h6>
                <a class="link link-hover">Mac</a>
                <a class="link link-hover">Windows</a>
                <a class="link link-hover">iPhone</a>
                <a class="link link-hover">Android</a>
            </nav>
        </footer>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const searchText = ref('')
    const router = useRouter()
    onMounted(() => {
        if (localStorage.getItem('isLoggedIn')) {
            isLogged.value = true
        }
    })

    const isLogged = ref(false)

    const login = () => {
        isLogged.value = true
        localStorage.setItem('isLoggedIn' , true)
    }

    const logout = () => {
        isLogged.value = false
        localStorage.removeItem('isLoggedIn')
    }

    const handleSearch = (event) => {
        console.log(event.key);
        if (event.key == 'Enter') {
            router.push({name : 'search',
                query : {
                    q : searchText.value
                }
            })
        }
        
    }
</script>

<style></style>