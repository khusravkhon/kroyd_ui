# Установка и запуск проекта

## Установка pnpm

Если `pnpm` ещё не установлен, установите его глобально:

```bash
npm install -g pnpm
```

## В корне репозитория запусти:

```bash
pnpm install
```

## Чтобы собрать все пакеты:

```bash
pnpm build
```

## Чтобы локально разрабатывать core пакет (vite dev):

```bash
pnpm -w -F @kroyd/ui-core dev
```

## Чтобы запустить Storybook:

```bash
pnpm storybook
```
