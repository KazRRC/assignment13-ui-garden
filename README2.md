## Assignment 13

cd assignment12-ui-garden

npm install

## Running the development server

npm start

http://localhost:3000

## running storybook

npm run storybook

http://localhost:6006


## Building the application

Create a production build:

npm run build


## Format the project

npm run format

## Check formatting

npm run check-format

## Run Tests

npm test -- --watchAll=false

## Husky

npm run check-format
npm run lint
npm test -- --watchAll=false

## Git commands

initialize git:

git init

Check repository status:

git status

stage all files:

git add .

create a commit:

git commit -m "Initial commit"

rename the default branch:

git branch -M main

connect the local project to GitHub:

git remote add origin https://github.com/KazRRC/assignment13-ui-garden.git

push the project:

git push -u origin main

## GitHub actions

.github/workflows/ci.yml

## build the Docker image

docker build -t ududec_kaz_coding_assignment13 .

## Run the docker container

docker run --name ududec_kaz_coding_assignment13 -p 8018:8018 ududec_kaz_coding_assignment13

## Open the application

http://localhost:8018