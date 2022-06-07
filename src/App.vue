<template>
	<Card>
		<template #title>
			Auctions
		</template>
		<template #content>
			<Menubar :model="items" />
			<router-view />
		</template>
	</Card>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Card from "primevue/card";
import Menubar from "primevue/menubar";
export default {
	name: "HomeView",
	data() {
		return {
			items: [
				{
					label: "Active Listings",
					icon: "pi pi-fw pi-file",
					to: "/active-listing"
				},
				{
					label: "Categories",
					icon: "pi pi-fw pi-pencil",
					to: "/categories"
				},
				{
					label: "Watchlist",
					icon: "pi pi-fw pi-user",
					to: "/watchlist"
				},
				{
					label: "Create Listing",
					icon: "pi pi-fw pi-calendar",
					to: "/create-listing"
				},
				{
					label: "login",
					icon: "pi pi-fw pi-sign-in",
					to: "/login"
				},
				{
					label: "Logout",
					icon: "pi pi-fw pi-power-off",
					to: "/logout"
				}
			]
		};
	},
	components: {
		// HelloWorld
		Menubar,
		Card
	}
};
</script>

<style></style>
