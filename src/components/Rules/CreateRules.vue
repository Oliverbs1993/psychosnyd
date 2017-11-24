<template>
  <v-container style="marginTop: 0;">
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Create a new rule</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateRule">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="ruleName"
                label="Rule name"
                id="ruleName"
                v-model="title"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="ruleDesc"
                label="Write your rule here"
                id="ruleDesc"
                v-model="description"
                multi-line
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create rule!</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default{
    data () {
      return {
        title: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' && this.description !== ''
      }
    },
    methods: {
      onCreateRule () {
        if (!this.formIsValid) {
          return
        }
        const ruleData = {
          title: this.title,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createRule', ruleData)
        this.$router.push('/rules')
      }
    }
  }

</script>
