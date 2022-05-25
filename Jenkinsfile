pipeline {
    agent any

    triggers {
        cron '0 0 * * *'
    }

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'docker build . -t onii-chann'
            }
        }

        stage('Test') {
            steps {
                parallel (
                    firstTest: {
                        bat 'docker run --entrypoint=cypress onii-chann run --spec cypress/integration/questionNumber2.spec.ts'
                    } ,
                    secondTest:{
                        bat  'docker run --entrypoint=cypress onii-chann run --spec cypress/integration/openingNewFile.spec.ts'
                    }
                )
            }
        }
    }
}