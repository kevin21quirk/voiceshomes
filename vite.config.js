import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const devApi = (env) => ({
  name: 'dev-api',
  configureServer(server) {
    server.middlewares.use('/api/enquiry', async (req, res) => {
      let raw = ''
      for await (const chunk of req) raw += chunk
      Object.assign(process.env, env)
      const { default: handler } = await server.ssrLoadModule('/api/enquiry.js')
      const out = {
        status(code) { res.statusCode = code; return out },
        json(data) { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)) },
      }
      req.body = raw ? JSON.parse(raw) : {}
      await handler(req, out)
    })
  },
})

export default defineConfig(({ mode }) => ({
  plugins: [react(), devApi(loadEnv(mode, process.cwd(), ''))],
}))
