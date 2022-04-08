FROM node

# instalar un simple servidor http para servir nuestro contenido estático
RUN npm install -g http-server

# copiar 'package.json' y 'package-lock.json' (si están disponibles)
COPY package*.json ./

# make the 'app' folder the current working directory


# instalar dependencias del proyecto
RUN npm install

# copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . .

# construir aplicación para producción minificada
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]