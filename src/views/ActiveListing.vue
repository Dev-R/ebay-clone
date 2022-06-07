<template>
	<div class="container-md">
		<br />
		<div class="jumbotron">
			<h1 class="display-6">Active listing</h1>
			<hr class="my-2" />
			<table>
				<tr>
					<Card>
						<template #content>
							<Card>
								<template #header>
									<img
										alt="user header"
										class="img-fluid"
										src="https://www.israel21c.org/wp-content/uploads/2017/11/harry-potter-voldermort-Lindeloff_np8zp4-768x432.jpg"
									/>
								</template>
								<template #title>
                                    <ul>
                                    Invisibility Cloak
                                    </ul>
                                    <ul>
                                    Price: $80 
                                    </ul    >
                                    <ul>
                                     <small> Created: 2022-06-07 09:45:21 UTC </small>
                                    </ul    >
								</template>
                                
								<template #content>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
									consequuntur error repudiandae numquam deserunt quisquam repellat
									libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
									cupiditate neque quas!
								</template>
							</Card>
						</template>
					</Card>
				</tr>
				<tr>
					<Card>
						<template #content>
							<Card>
								<template #header>
									<img
										alt="user header"
										class="img-fluid"
										src="https://www.israel21c.org/wp-content/uploads/2017/11/harry-potter-voldermort-Lindeloff_np8zp4-768x432.jpg"
									/>
								</template>
								<template #title>
                                    <ul>
                                    Invisibility Cloak
                                    </ul>
                                    <ul>
                                    Price: $80 
                                    </ul    >
                                    <ul>
                                     <small> Created: 2022-06-07 09:45:21 UTC </small>
                                    </ul    >
								</template>
                                
								<template #content>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
									consequuntur error repudiandae numquam deserunt quisquam repellat
									libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
									cupiditate neque quas!
								</template>
							</Card>
						</template>
					</Card>
				</tr>
				<tr>
                    
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Card from "primevue/card";
// import Divider from 'primevue/divider';
export default {
	name: "HomeView",
	components: {
		Card
		// Divider
	}
};
</script>
