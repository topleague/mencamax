import { visit } from 'unist-util-visit';

// Turns ![wide: some caption](url) into a full-width breakout image.
// Regular images — ![normal caption](url) — are untouched.
export default function remarkWideImages() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (typeof node.alt === 'string' && node.alt.trim().toLowerCase().startsWith('wide:')) {
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.class = 'wide-image';
        node.alt = node.alt.trim().slice(5).trim();
      }
    });
  };
}
