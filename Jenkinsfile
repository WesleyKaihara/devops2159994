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
			stage('Start Production Enviroment') {
				steps {
					sh 'npm run start-infra'
				}
			}
			stage("CI Tests") {
				steps {
					echo 'CI Tests...'
					sh 'npm run test:ci'
				}
			}
			stage("E2E Tests") {
				steps {
					echo 'e2e Tests...'
					sh 'npm run test:e2e'
				}
			}
			stage("Build Application") {
				steps {
					sh 'Building...'
					sh 'npm run start'
				}
			}
    }
}

