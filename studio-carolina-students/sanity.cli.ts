import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9fecsfft',
    dataset: 'production',
  deployment: {
    autoUpdates: true,
    appId: 'q241ln87elhdqd29hckr4ngc',
  typegen: {
    enabled: true,
    path: '../web/src/**/*.{ts,tsx,js,jsx}',
    schema: 'schema.json',
    generates: '../web/sanity.types.ts',
    overloadClientMethods: true,
  },
  vite: (config) => {
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [...(config.optimizeDeps?.include || []), '@sanity/sdk-react'],
        esbuildOptions: {
          ...config.optimizeDeps?.esbuildOptions,
          loader: {
            '.js': 'jsx',
          },
        },
      },
    }
  }
})
