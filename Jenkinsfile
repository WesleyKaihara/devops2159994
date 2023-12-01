pipeline {
    agent any
		tools {
        nodejs 'node-20.10.0'
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
					script { 
						sh '''
								npm install
						'''
					}
				}
			}
			stage('Run Tests') {
				steps {
					echo 'CI Tests...'
					sh 'npm run test:ci'

					echo 'e2e Tests...'
					sh 'npm run test:e2e'
					
					echo 'CI Veify...'
					sh 'npm run cy:verify'
				}
			}
			stage('Run Application') {
				steps {
					sh 'npm run start-infra'
				}
			}
    }
}

