FROM nginx:alpine

WORKDIR /Ududec_Kaz_ui_garden

COPY build /usr/share/nginx/html

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]