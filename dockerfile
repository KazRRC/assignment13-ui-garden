FROM node:20

WORKDIR /ududec_kaz_ui_garden_build_checks

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8018

CMD ["serve", "-s", "build", "-l", "8018"]