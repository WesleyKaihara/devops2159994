pipeline {
    agent any

		tools {nodejs "nodejs"}
		
    stages {
    	stage('Info') {
				steps {
					sh '''
						docker compose version
						node -v
						npm -v
					'''
				}
    	}
    	stage('Build') {
				steps {
					sh '''docker compose build'''
				}
    	}
			stage('Run Tests') {
				steps {
					echo 'e2e Tests'
					sh 'npm run test:e2e'
					
					echo 'CI Tests'
					sh 'npm run test:ci'
				}
			}
			stage('Run Application') {
				steps {
					sh 'docker compose up'
				}
			}
    }
}
