# FROM node:18-alpine AS base
# RUN corepack enable

# FROM base AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# COPY package.json pnpm-lock.yaml .npmrc* ./
# RUN pnpm install --frozen-lockfile

# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# RUN pnpm run build

# FROM base AS runner
# WORKDIR /app

# ENV NODE_ENV=production

# RUN addgroup --system --gid 1001 nodejs && \
#     adduser --system --uid 1001 nextjs

# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER nextjs

# EXPOSE 3000

# ENV PORT=3000
# ENV HOSTNAME="0.0.0.0"

# CMD ["node", "server.js"]


FROM node:18-alpine AS base
RUN corepack enable

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копируем ВСЕ необходимые файлы конфигурации
COPY package.json pnpm-lock.yaml .npmrc* .env* ./

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Убедимся, что .env-файлы скопированы
COPY --from=deps /app/.env* ./

# Собираем проект
RUN pnpm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Копируем только необходимые файлы для production
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Копируем ТОЛЬКО production .env-файлы (опционально)
# COPY --from=builder /app/.env.production ./.env.production

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]