# Etapa de desarrollo
FROM node:18-alpine AS development
WORKDIR /usr/src/app
# Copia solo los archivos de dependencia primero para aprovechar la caché
COPY package*.json ./
# Instala todas las dependencias necesarias
RUN npm ci
# Copia el resto del código fuente
COPY . .

# Etapa de compilación
FROM node:18-alpine AS build
WORKDIR /usr/src/app
# Copia los archivos de dependencia y módulos de desarrollo ya instalados
COPY package*.json ./
COPY --from=development /usr/src/app/node_modules ./node_modules
# Copia el resto del código fuente
COPY . .
# Ejecuta el build de la aplicación
RUN npm run build
# Instala solo las dependencias de producción y limpia la caché
RUN npm ci --only=production && npm cache clean --force

# Etapa de producción
FROM node:18-alpine AS production
WORKDIR /usr/src/app
# Copia los módulos de producción y el código compilado
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
# Exponer el puerto que usará la aplicación en producción
EXPOSE 3000
# Iniciar la aplicación
CMD ["node", "dist/src/main"]