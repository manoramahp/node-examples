pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "cd sample-backend"
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                sh "cd sample-backend"
                sh "npm test"
            }
        }
    }
}