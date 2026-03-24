pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                dir('shams-app') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                dir('shams-app') {
                    bat 'npm test'
                }
            }
        }
    }
}
