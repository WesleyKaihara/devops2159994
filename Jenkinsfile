pipeline {
    agent any
		tools {
        nodejs 'node-12.22.12'
    }
    stages {
			stage('Install Dependencies') {
				steps { 
						sh 'npm install'
				}
			}
			stage('Run Tests') {
				steps {
					echo 'Tests...'
					sh 'npm test'

					echo 'Cypress Veify...'
					sh 'npm run cy:verify'

					// echo 'CI Tests...'
					// sh 'npm run test:ci'

				}
			}
			stage('Start test Enviroment') {
				steps {
					sh 'docker compose up -d'
				}
			}
			stage("CI Tests") {
				steps {
					echo 'CI Tests...'
					sh 'npm run test:ci'
				}
			}
			// stage("E2E Tests") {
			// 	steps {
			// 		echo 'e2e Tests...'
			// 		sh 'npm run test:e2e'
			// 	}
			// }
			stage("Deploy Application") {
				steps {
					echo 'Building...'
					// echo 'docker compose up'
					sh 'npm start'
				}
			}
    }

		post {
			success {
					echo 'Build finished!'
			}

			failure {
					echo 'Build failed'
			}
    }
}

