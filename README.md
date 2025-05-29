# Remix on Cloudflare Pages

A modern Remix application configured to run on Cloudflare Pages with TypeScript support.

## 🚀 Features

- **Remix 2.x** - Full-stack React framework
- **Cloudflare Pages** - Fast global deployment
- **TypeScript** - Type-safe development
- **Vite** - Fast development server and build tool
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
├── app/
│   ├── routes/
│   │   └── _index.tsx          # Homepage route
│   ├── entry.client.tsx        # Client-side entry point
│   ├── entry.server.tsx        # Server-side entry point
│   └── root.tsx                # Root component/layout
├── public/                     # Static assets
├── wrangler.toml              # Cloudflare configuration
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🛠️ Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### Cloudflare Pages

1. **Deploy manually:**

   ```bash
   npm run deploy
   ```

2. **Set up automatic deployments:**
   - Connect your repository to Cloudflare Pages
   - Set build command: `npm run build`
   - Set build output directory: `build/client`

### Environment Variables

Update `wrangler.toml` to configure environment variables:

```toml
[vars]
API_KEY = "your-api-key"
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server locally
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks

## 📚 Learn More

- [Remix Documentation](https://remix.run/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License.
