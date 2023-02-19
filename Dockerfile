# Fetching latest node image  on apline linux
FROM node:alpine As builder

# Declarating env
ENV NODE_ENV production

# Setting up the directory
WORKDIR /todo-app

# Installing depnedencies
COPY ./package.json .
RUN npm install

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

# Fetching latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /todo-app/build /usr/share/nginx/html

# copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf