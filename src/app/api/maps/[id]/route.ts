import { NextRequest, NextResponse } from "next/server"
import { prepareMap, typeResultMapInfo } from "@/utils/prepare-infos"

type typeContext = {
    params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, context: typeContext) {

    const params: { id: string } = await context.params
    const id: string = params?.id
    
    if (!id) {
        return NextResponse.json(
            { message: "The id parameter was not found." }, 
            { status: 401, headers: { 'Access-Control-Allow-Origin': '*' } }
        )
    }

    try {
        const response = await fetch(`https://www.roblox.com/pt/games/${id}`)
        const htmlContent = await response.text()

        if (response.status === 404) {
            return NextResponse.json(
                { message: "404 not found" },
                { status: 404, headers: { 'Access-Control-Allow-Origin': '*' } }
            )
        } 

        const getInfo: typeResultMapInfo = prepareMap(htmlContent)

        return NextResponse.json(
            { id: Number(id), name: getInfo.name }, 
            { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } }
        )

    } catch(err) {
        return NextResponse.json(
            { message: "Server error" },
            { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
        )
    } 
}