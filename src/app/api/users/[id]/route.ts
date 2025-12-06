import { NextRequest, NextResponse } from "next/server"
import prepareInfos from "@/utils/prepare-infos"

type resultInfo = {
    username: string | undefined,
    displayName: string | undefined,
    imageUrl: string | undefined
}

type typeContext = {
    params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, context: typeContext ) {

    const params: { id: string } = await context.params
    const id: string = params?.id
    
    if (!id) {
        return NextResponse.json({ message: "The id parameter was not found." }, {
            status: 401
        })
    }

    try {
        const response = await fetch(`https://www.roblox.com/pt/users/${id}/profile`)
        const htmlContent = await response.text()

        if (response.status === 404) {

            return NextResponse.json({ message: "404 not found" }, {
                status: 404
            })

        } 

        const getInfo: resultInfo = prepareInfos(htmlContent)

        return NextResponse.json(
            { id: Number(id), username: getInfo.username, displayName: getInfo.displayName, imageUrl: getInfo.imageUrl }, 
            { status: 200 }
        )

    } catch(err) {
        return NextResponse.json({ message: "Server error" }, {
            status: 500
        })
    } 

}