const _Texts = () => {
    const imageTitles = [
        "Tira o mouse de mim",
        "Oxi",
        "Vou te dar um roundhouse kick na cara"
    ]

    return imageTitles
}

const _GetSingleTitle = () => {
    const texts = _Texts()

    const min = 0
    const max = texts.length - 1

    const index = Math.round(Math.random() * (max - min) + min);

    return texts[index]
}


export const ImageTitleText = () => {
    return _GetSingleTitle()
}