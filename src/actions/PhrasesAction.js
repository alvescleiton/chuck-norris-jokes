const fixPhrase = (text) => {
    var newPhrase = text.replace(/&quot;/g, '"')

    return newPhrase
}

export const getPhrase = async () => {
    let data = await (
        await fetch(`https://api.chucknorris.io/jokes/random`)
        .then((res) => res.json())
        .then((data) => fixPhrase(data.value))
        .catch((err) => err)
    )

    return data
}