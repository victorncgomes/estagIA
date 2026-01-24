import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3008,
      host: '0.0.0.0',
      fs: {
        allow: ['..', 'knowledge'],
      },
    },
    plugins: [
      react(),
      // Servir arquivos do diretório knowledge
      {
        name: 'serve-knowledge',
        configureServer(server) {
          server.middlewares.use('/knowledge', (req, res, next) => {
            const filePath = path.join(__dirname, 'knowledge', req.url || '');
            import('fs').then(fs => {
              if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath);
                // Definir charset UTF-8 para arquivos de texto
                if (req.url?.endsWith('.txt')) {
                  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                } else if (req.url?.endsWith('.json')) {
                  res.setHeader('Content-Type', 'application/json; charset=utf-8');
                }
                res.end(content);
              } else {
                next();
              }
            });
          });
        },
      },
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    // Servir arquivos de knowledge como estáticos
    publicDir: 'public',
  };
});
