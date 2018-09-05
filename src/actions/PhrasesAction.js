'use strict'

const fixPhrase = (text) => {
    var newPhrase = text.replace(/&quot;/g, '"')

    return newPhrase
}

export const getPhrase = async () => {
    let data = await (
        await fetch(`http://api.icndb.com/jokes/random`)
        .then((res) => res.json())
        .then((data) => fixPhrase(data.value.joke))
        .catch((err) => err)
    )

    return data
}