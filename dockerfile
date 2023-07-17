# Usar una imagen oficial de Node.js como padre
FROM node:14

# Crear un directorio de trabajo
WORKDIR /usr/src/app

# Instalar las dependencias de la aplicación
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Instalar el paquete 'serve' para servir la aplicación
RUN npm install -g serve

# Exponer el puerto que será utilizado por Railway
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]
