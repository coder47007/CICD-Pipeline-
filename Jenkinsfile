pipeline {
        agent any

        environment {
                    CI = 'true'
                    NETLIFY_AUTH_TOKEN = credentials('netlify-token')
                    NETLIFY_SITE_ID = credentials('netlify-site-id')
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
                                                                                // Override default ignore patterns to ensure files in .jenkins folder are found
                                                                                bat 'npm test -- --watchAll=false --testPathIgnorePatterns "^$"'
                                                        }
                                    }
                    }
                    stage('Deploy') {
                                    steps {
                                                        dir('shams-app') {
                                                                                bat 'npx netlify-cli deploy --dir=build --prod'
                                                        }
                                    }
                    }
        }
}
