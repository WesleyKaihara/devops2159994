pipeline {
    agent any

    stages {
    	stage('Build') {
				steps {
					sh 'docker compose build'
				}
    	}, 
			stage('Run Application') {
				steps {
					sh 'docker compose up'
				}
			}
    }
}
