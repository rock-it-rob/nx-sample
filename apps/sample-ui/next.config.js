//@ts-check
// import { withNx } from '@nx/next';
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  output: 'standalone',
};

const plugins = [withNx];

// export default withNx(nextConfig);
module.exports = composePlugins(...plugins)(nextConfig);
