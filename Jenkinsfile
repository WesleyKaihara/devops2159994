pipeline {
    agent any
		tools {
        nodejs 'node-12.22.12'
    }
    stages {
    	// stage('Info') {
			// 	steps {
			// 		sh '''
			// 			docker compose version
			// 		'''
			// 	}
    	// }
			// stage('Build') {
			// 	steps {
			// 		sh '''docker compose build'''
			// 	}
    	// }
			stage('Install Dependencies') {
				steps { 
						sh 'npm install'
				}
			}
			stage('Run Tests') {
				steps {
					echo 'e2e Tests...'
					sh 'npm test'

					echo 'e2e Tests...'
					sh 'npm run test:e2e'

					echo 'CI Veify...'
					sh 'npm run cy:verify'

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

