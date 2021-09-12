import { ImageUploaderFragment } from '../__generated__/ImageUploaderFragment.graphql';

export const nameSurnamePattern = '^[a-zA-ZğüşöçİĞÜŞÖÇ ]+$';
export const tcNoPattern = '[0-9]{11}$';
export const phonePattern =
  '\\+[0-9]{2,3}[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{2}[ ]?[0-9]{2}$';
export const vergiNo = '[0-9]{10}';

export function getImageGroupByWidth(
  imageGroup: ImageUploaderFragment,
  width: number,
) {
  let imgUrl = '';
  if (imageGroup && imageGroup.images && imageGroup.images.edges) {
    let i = 0;
    let foundWidth = 0;
    let img;
    while (foundWidth < width && i < imageGroup.images.edges.length) {
      if (imageGroup.images.edges[i]) {
        const { node } = imageGroup.images.edges[
          imageGroup.images.edges.length - 1
        ] as any;
        if (node) {
          foundWidth = node.width;
          img = node;
          if (foundWidth > width) {
            break;
          }
        }
      }
      i += 1;
    }
    if (img && img.externalUrl) {
      imgUrl = img.externalUrl;
    } else if (img && img.file && img.file.url) {
      imgUrl = img.file.url;
    }
  }
  return imgUrl;
}
