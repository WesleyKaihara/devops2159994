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
					echo 'e2e Tests...'
					sh 'npm test'

					echo 'CI Veify...'
					sh 'npm run cy:verify'

					// echo 'e2e Tests...'
					// sh 'npm run test:e2e'

					echo 'CI Tests...'
					sh 'npm run test:ci'
				}
			}
			stage('Run Application') {
				steps {
					sh 'npm run start-infra'
				}
			}
    }
}

