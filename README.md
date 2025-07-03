# ![sportSee](public/logo.png) Welcome to SportSee

This app is the Projet 12 of Openclassrooms training Javascript React
I choose to use framework mode from React Router v7, including a default template:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

Clone the project in a directory:

```bash
git clone https://github.com/ChardonBleu/SportSee
```

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Linter

Install the dependencies:

```bash
npm run lint
```

### Prettier

Install the dependencies:

```bash
npm run fmt
```

### Checking fot typing

Install the dependencies:

```bash
npm run typecheck
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

## Ressources:

- Documentation Réact [https://fr.react.dev/learn](https://fr.react.dev/learn).

- Documentation Vite [https://vitejs.fr/guide/](https://vitejs.fr/guide/).

- Documentation TypeScript avec React [https://react-typescript-cheatsheet.netlify.app/docs](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example).

- documentation React Router [https://reactrouter.com/home](https://reactrouter.com/home)

- Router React V7 par PedroTech [https://www.youtube.com/watch?v=h7MTWLv3xvw](https://www.youtube.com/watch?v=h7MTWLv3xvw)

## Thanks

Many thanks to Herbert Caffarel for his valuable advices and feedbacks.

---

Built with ❤️ using React Router.
