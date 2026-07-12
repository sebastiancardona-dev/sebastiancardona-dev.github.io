# Build args are stamped by the shared pipeline (sebastiancardona-dev/workflows)
FROM node:22-alpine AS build
ARG VERSION=dev
ARG GIT_SHA=unknown
ARG BUILD_TIME=unknown
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build \
 && printf '{"app":"portfolio","version":"%s","git_sha":"%s","build_time":"%s"}\n' \
      "$VERSION" "$GIT_SHA" "$BUILD_TIME" > dist/info.json

# Unprivileged runtime: uid 101, listens on 8080 — no root in the final image
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
