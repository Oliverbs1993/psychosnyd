<template>
	<v-container style="marginTop: 0;">
		<v-layout row wrap>
			<v-flex xs12>
				<v-card class="info">
					<v-container fluid>
						<v-layout row>
							<v-flex xs1 >
								<v-card-media>
									<v-icon left dark>import_contacts</v-icon>
								</v-card-media>
							</v-flex>
							<v-flex xs12>
								<v-card-title>
									<div>
										<h1>Title</h1>
										<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aliquid, exercitationem dicta, tenetur velit assumenda eum quidem vel dolores molestiae, nemo. Dignissimos deserunt autem earum distinctio quis quasi, sequi repellendus!</div>
									</div>
								</v-card-title>
								<v-card-actions>
									<v-btn flat to="/rules/1">
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
