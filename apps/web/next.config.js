//@ts-check

import { composePlugins, withNx } from '@nx/next'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  output: 'standalone',
  compiler: {
    emotion: true
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true
  }
}

// Compose the plugins for Next.js
const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx
]

export default composePlugins(...plugins)(nextConfig)
