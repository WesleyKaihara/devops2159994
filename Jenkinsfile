pipeline {
    agent {
        docker { image 'node:20.10.0' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker compose build'
								sh 'docker compose up'
            }
        },
    }
}