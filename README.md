# Deployment of Restaurant Project to gh-pages

* create a gh-pages branch locally and then push it to github.
    ```
    git checkout -b gh-pages
    git push origin gh-pages
    ```

* install the CLI tool that will help deploy the application.
    ```
    npm i -g angular-cli-ghpages
    ```

* create a build folder for production
    ```
    ng build --prod --base-href="https://GithubUserName.github.io/GithubREPO/"
    ```

* remove the dist/ line in the gitignore file

* deploy to ghpages
    ```
    ngh --dir=dist/Restaurant 
    ```

* If successful you can run the project from ghpages using the base link you provided https://GithubUserName.github.io/GithubREPO/