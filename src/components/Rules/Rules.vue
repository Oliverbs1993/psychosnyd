<template>
	<v-container style="marginTop: 0;">
		<v-layout row wrap v-for="rule in rules" :key="rule.id" class="mb-4">
			<v-flex xs12>
				<v-card class="info">
					<v-container fluid>
						<v-layout row>
							<v-flex xs1>
								<v-card-media>
									<v-icon left dark>import_contacts</v-icon>
								</v-card-media>
							</v-flex>
							<v-flex xs12>
								<v-card-title>
									<div>
										<h1>{{ rule.title }}</h1>
                    <div >{{ rule.date }}</div>
                    <div>{{ rule.description }}</div>
									</div>
								</v-card-title>
								<v-card-actions>
									<v-btn :to="'/rules/' + rule.id">
										View full rule
										<v-icon right>remove_red_eye</v-icon>
									</v-btn>
								</v-card-actions>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  export default {
    computed: {
      rules () {
        return this.$store.getters.loadedRules
      }
    }
  }
</script>
