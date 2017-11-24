<template>
	<v-container style="marginTop: 0;">
		<v-layout row wrap>
			<v-flex xs12>
				<v-card>
					<v-card-title>
						<h1>{{ rule.title }}</h1>
            <v-spacer></v-spacer>
            <div >{{ rule.date | date  }}</div>
					</v-card-title>
					<v-divider></v-divider>
					<v-card-text>
						{{ rule.description }}
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      rule () {
        return this.$store.getters.loadedRule(this.id)
      }
    }
  }

</script>
