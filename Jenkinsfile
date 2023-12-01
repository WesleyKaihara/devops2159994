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
			stage('Prepare Enviroment') {
				steps {
					sh 'apt-get update'
					sh 'apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
				}
			}
			stage('Install Dependencies') {
				steps { 
						sh 'npm install'
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

