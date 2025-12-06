type resultInfo = {
    username: string | undefined,
    displayName: string | undefined,
    imageUrl: string | undefined
}

export default function prepareInfos(htmlContent: string): resultInfo {

    const regexDisplayname: RegExp = /<title>(.*?) - Roblox<\/title>/
    const regexUsername: RegExp = /"profileusername":"(.*?)"/
    const regexImage: RegExp = /https:\/\/tr\.rbxcdn\.com\/30DAY[A-Za-z0-9\/-]+/

    const displayNameMatch = htmlContent.match(regexDisplayname)
    const usernameMatch = htmlContent.match(regexUsername)
    const imageMatch = htmlContent.match(regexImage)

    const result: resultInfo = {
        username: usernameMatch?.[1],
        displayName: displayNameMatch?.[1],
        imageUrl: imageMatch?.[0]
    }

    return result
}