import { ICroppedArea } from './index'
const createImage = (url: string) =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', error => reject(error))
        image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
        image.src = url
    })

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 */
export default async function getCroppedImg(imageSrc: string, pixelCrop: ICroppedArea) {
    const image: any = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height
    const ctx = canvas.getContext('2d')

    if (ctx) {
        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        )
    }

    // As Base64 string
    return canvas.toDataURL('image/png')

    // As a blob
    // return new Promise((resolve) => {
    //     canvas.toBlob(file => {
    //         resolve(URL.createObjectURL(file))
    //     }, 'image/jpeg')
    // })
}
