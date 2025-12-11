export type typeResultUserInfo = {
    username: string | undefined,
    displayName: string | undefined,
    imageUrl: string | undefined
}

export type typeResultMapInfo = {
    name: string | undefined
}

export function prepareUser(htmlContent: string): typeResultUserInfo {

    const regexDisplayname: RegExp = /<title>(.*?) - Roblox<\/title>/
    const regexUsername: RegExp = /"profileusername":"(.*?)"/
    const regexImage: RegExp = /https:\/\/tr\.rbxcdn\.com\/30DAY[A-Za-z0-9\/-]+/

    const displayNameMatch = htmlContent.match(regexDisplayname)
    const usernameMatch = htmlContent.match(regexUsername)
    const imageMatch = htmlContent.match(regexImage)

    const result: typeResultUserInfo = {
        username: usernameMatch?.[1],
        displayName: displayNameMatch?.[1],
        imageUrl: imageMatch?.[0]
    }

    return result
}

export function prepareMap(htmlContent: string): typeResultMapInfo {

    const regexMap: RegExp = /"SoftwareApplication","name":"(.*?)"/

    const mapNameMatch = htmlContent.match(regexMap)
    const format: string | undefined = JSON.parse(`"${mapNameMatch?.[1]}"`)

    const result: typeResultMapInfo = {
        name: format
    }

    return result
}