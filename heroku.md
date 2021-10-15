# Heroku configuration

## Run the codes
```
heroku login
```
```
git init
```
```
heroku git:remote -a <app-name>
```
```
heroku create --buildpack https://github.com/heroku/heroku-buildpack-nodejs.git
```
```
heroku buildpacks:set heroku/nodejs
```
```
git add .
```
```
git commit -am "First commit"
```
```
git push heroku master
```
