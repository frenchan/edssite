/* scripts/aem-assets-plugin-support.js */

// Base path of the aem-assets-plugin code in your repo
const codeBasePath = `${window.hlx?.codeBasePath}`;

// Blocks you want the plugin to manage (can stay empty or add 'video', etc.)
const blocks = [];

// Initialize the aem-assets-plugin
export default async function assetsInit() {
  const {
    loadBlock,
    createOptimizedPicture,
    decorateExternalImages,
    createOptimizedPictureForDMOpenAPI,
    createOptimizedPictureForDM,
  } = await import(`${codeBasePath}/scripts/aem-assets.js`);

  window.hlx = window.hlx || {};
  window.hlx.aemassets = {
    codeBasePath,
    blocks,
    loadBlock,
    createOptimizedPicture,
    decorateExternalImages,
    createOptimizedPictureForDMOpenAPI,
    createOptimizedPictureForDM,
    smartCrops: {
      Small: { minWidth: 0, maxWidth: 767 },
      Medium: { minWidth: 768, maxWidth: 1023 },
      Large: { minWidth: 1024, maxWidth: 9999 },
    },
    // Tell the plugin which external URLs to treat as DM images
    externalImageUrlPrefixes: [
      [
        'https://delivery-p88906-e783463.adobeaemcloud.com/',
        createOptimizedPictureForDMOpenAPI,
      ],
      // You can add Scene7-style domains here later if needed:
      // ['https://s7ap1.scene7.com/is/image/varuncloudready/', createOptimizedPictureForDM],
    ],
  };
}
