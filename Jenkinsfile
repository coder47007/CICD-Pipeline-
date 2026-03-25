pipeline {
    agent any

    environment {
        CI = 'true'
        // These will be loaded from Jenkins credentials that you need to set up in Step 11
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
                    // Explicitly pass --watchAll=false to prevent Jest from waiting or failing if CI isn't perfectly set
                    bat 'npm test -- --watchAll=false'
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('shams-app') {
                    // netlify-cli automatically uses NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID env variables
                    bat 'npx netlify-cli deploy --dir=build --prod'
                }
            }
        }
    }
}
