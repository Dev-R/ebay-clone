<template>
	<div class="container-sm">
		<br />
		<div class="jumbotron text-left">
			<h1 class="display-6 ">
				Listing: Simple Cloak
			</h1>
			<Chip label="Watchlist" icon="pi pi-check" />
			<hr class="my-2" />
			<h1 class="display-4">
				<img
                    class="img-fluid"
					alt="user header"
					src="https://www.israel21c.org/wp-content/uploads/2017/11/harry-potter-voldermort-Lindeloff_np8zp4-768x432.jpg"
				/>
			</h1>
			<p class="lead">
				This is a simple hero unit, a simple jumbotron-style component for calling
				extra attention to featured content or information.
			</p>
			<h1 class="display-6 ">$80.00</h1>
			<small>2 bids so far. Your bid is the current bid.</small>
			<div class="input-group input-group-lg">
				<button
					type="button"
					class="btn btn-dark input-group-text"
					id="inputGroup-sizing-lg"
				>
					Place a Bid
				</button>
				<input
					type="text"
					class="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-lg"
				/>
			</div>
			<h1 class="display-6 ">Details</h1>
			<li>Listed by Alex</li>
			<li>Category: Cars</li>
			<hr class="my-2" />
			<div class="jumbotron">
				<h1 class="display-6">Comments Section</h1>
				<div class="form-group">
					<textarea
						class="form-control"
						id="exampleFormControlTextarea1"
						rows="2"
						placeholder="Leave a comment"
					></textarea>
				</div>
				<p class="lead">
					<a class="btn btn-dark btn-lg" href="#" role="button">Post comment</a>
				</p>
			</div>
			<h1 class="display-6">Comments</h1>
			<table>
				<tr>
					<Card>
						<template #content>
							<div class="d-flex  ">
								<i class="pi pi-user" style="font-size:2rem"> Rabee Ali </i>
								<div class="vr"></div>
							</div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
							consequuntur error repudiandae numquam deserunt quisquam repellat libero
							asperiores earum nam nobis, culpa ratione quam perferendis esse,
							cupiditate neque quas!
						</template>
					</Card>
				</tr>
				<hr class="my-2" />
				<tr>
					<Card>
						<template #content>
							<div class="d-flex  ">
								<i class="pi pi-user" style="font-size:2rem"> Alex Mohammed </i>
								<div class="vr"></div>
							</div>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
							consequuntur error repudiandae numquam deserunt quisquam repellat libero
							asperiores earum nam nobis, culpa ratione quam perferendis esse,
							cupiditate neque quas!
						</template>
					</Card>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Card from "primevue/card";
// import InputNumber from "primevue/inputnumber";
import Chip from "primevue/chip";
export default {
	name: "HomeView",
	components: {
		Chip,
		// InputNumber
		Card
		// HelloWorld
	}
};
</script>
