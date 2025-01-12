pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        FILE_ID = 'EnvSkynetGenisys'
        WORKSPACE_PATH = '/var/lib/jenkins/workspace/SKYNET_GENISYS'
    }

    stages {
        stage('Variable') {
            steps {
                // Copiando archivos de configuración antes de los demás stages.
                echo "************************* Copy Variable Env ***************************************"
                script {
                    configFileProvider([configFile(fileId: "${FILE_ID}", targetLocation: "${WORKSPACE_PATH}/.env")]) {
                        echo "Archivo de configuración copiado a ${WORKSPACE_PATH}/.env"
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Deteniendo y eliminando contenedores antiguos...'
                sh 'docker-compose down -v'
            }
        }

        stage('Pull Base Images') {
            steps {
                echo 'Actualizando imágenes base de Docker...'
                //sh 'docker pull node:20'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Construyendo la imagen Docker...'
                    sh 'docker-compose build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Desplegando los servicios con Docker Compose...'
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado.'
        }
        success {
            echo 'Pipeline ejecutado exitosamente.'
        }
        failure {
            echo 'El pipeline falló. Verifica los logs.'
        }
    }
}