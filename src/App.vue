<template>
    <Menubar :model="items" />
    <router-view />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Menubar from "primevue/menubar";
export default {
    name: "HomeView",
    data() {
        return {
            items: [
                {
                    label: "Active Listings",
                    icon: "pi pi-fw pi-file",
                    items: [
                        {
                            label: "New",
                            icon: "pi pi-fw pi-plus",
                            items: [
                                {
                                    label: "Bookmark",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Video",
                                    icon: "pi pi-fw pi-video"
                                }
                            ]
                        },
                        {
                            label: "Delete",
                            icon: "pi pi-fw pi-trash"
                        },
                        {
                            separator: true
                        },
                        {
                            label: "Export",
                            icon: "pi pi-fw pi-external-link"
                        }
                    ]
                },
                {
                    label: "Categories",
                    icon: "pi pi-fw pi-pencil",
                    items: [
                        {
                            label: "Left",
                            icon: "pi pi-fw pi-align-left"
                        },
                        {
                            label: "Right",
                            icon: "pi pi-fw pi-align-right"
                        },
                        {
                            label: "Center",
                            icon: "pi pi-fw pi-align-center"
                        },
                        {
                            label: "Justify",
                            icon: "pi pi-fw pi-align-justify"
                        }
                    ]
                },
                {
                    label: "Watchlist",
                    icon: "pi pi-fw pi-user",
                    items: [
                        {
                            label: "New",
                            icon: "pi pi-fw pi-user-plus"
                        },
                        {
                            label: "Delete",
                            icon: "pi pi-fw pi-user-minus"
                        },
                        {
                            label: "Search",
                            icon: "pi pi-fw pi-users",
                            items: [
                                {
                                    label: "Filter",
                                    icon: "pi pi-fw pi-filter",
                                    items: [
                                        {
                                            label: "Print",
                                            icon: "pi pi-fw pi-print"
                                        }
                                    ]
                                },
                                {
                                    icon: "pi pi-fw pi-bars",
                                    label: "List"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Create Listing",
                    icon: "pi pi-fw pi-calendar",
                    items: [
                        {
                            label: "Edit",
                            icon: "pi pi-fw pi-pencil",
                            items: [
                                {
                                    label: "Save",
                                    icon: "pi pi-fw pi-calendar-plus"
                                },
                                {
                                    label: "Delete",
                                    icon: "pi pi-fw pi-calendar-minus"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Logut",
                    icon: "pi pi-fw pi-calendar"
                }
            ]
        };
    },
    components: {
        // HelloWorld
        Menubar
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
