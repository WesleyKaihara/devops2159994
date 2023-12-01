pipeline {
    agent any

    stages {
    	stage('Info') {
				steps {
					sh '''
						docker compose version
					'''
				}
    	}
    	stage('Build') {
				steps {
					sh '''docker compose build'''
				}
    	}
			stage('Run Application') {
				steps {
					sh 'docker compose up'
				}
			}
    }
}
