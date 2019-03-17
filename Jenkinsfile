pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "cd node-examples"
                sh "cd sample-backend"
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                sh "cd node-examples"
                sh "cd sample-backend"
                sh "npm test"
            }
        }
    }
}