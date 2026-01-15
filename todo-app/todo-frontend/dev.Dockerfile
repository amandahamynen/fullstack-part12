FROM node:20
WORKDIR /usr/src/app
COPY . .
ENV VITE_BACKEND_URL=/api
RUN npm install
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]