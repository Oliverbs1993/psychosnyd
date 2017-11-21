<template>
	<v-container style="marginTop: 0;">
		<v-layout row wrap>
			<v-flex sm5>
				<v-card>
	        <v-toolbar dark>
	          <v-toolbar-title>Quick intro</v-toolbar-title>
	        </v-toolbar>
		      <v-list>
		        <v-list-tile
		          v-for="step in steps"
		          :key="step.title"
	          >
		          <v-list-tile-action>
		            <v-icon>{{ step.icon }}</v-icon>
		          </v-list-tile-action>
		          <v-list-tile-content>
		            {{ step.title }}
		          </v-list-tile-content>
		        </v-list-tile>
		      </v-list>
				</v-card>
			</v-flex>

			<v-flex sm5 offset-sm2>
				<v-card>
	        <v-toolbar dark>
	          <v-toolbar-title>Latest rules added</v-toolbar-title>
	        </v-toolbar>
		      <v-list>
	          <v-list-tile
							v-for="rule in rules"
							:key="rule.title"
	          >
	            <v-list-tile-content>
	              <v-list-tile-title>{{ rule.title }}</v-list-tile-title>
	              <v-list-tile-sub-title>{{ rule.description }}</v-list-tile-sub-title>
	            	<v-divider></v-divider>
	            </v-list-tile-content>
	          </v-list-tile>
		      </v-list>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>
  export default {
    computed: {
      rules () {
        return this.$store.getters.latestRules
      }
    },
    data () {
      return {
        steps: [
          { icon : 'rotate_right', title: '1. Roll your die'},
          { icon : 'thumb_up', title: '2. Drink'},
          { icon : 'playlist_add_check', title: '3. Make rules'},
          { icon : 'attach_money', title: '4. Profit'},
        ]
      }
    }
  }

</script>
