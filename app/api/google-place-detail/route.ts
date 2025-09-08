import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { placeName } = await req.json()

    const BASE_URL = 'https://places.googleapis.com/v1/places:searchText';

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': process.env.GOOGLE_PLACE_API_KEY,
            'X-Goog-FieldMask': [
                'places.photos',
                'places.displayName',
                'places.id'
            ]
        }
    }

    try {

        const result = await axios.post(BASE_URL, {
            textQuery: placeName
        }, config)

        const placeRefName = result?.data?.places[0]?.photos[0]?.name

        const photoRefUrl = `https://places.googleapis.com/v1/${placeRefName}/media?maxHeightPx=400&maxWidthPx=400&key=${process.env.GOOGLE_PLACE_API_KEY}`;

        return NextResponse.json(photoRefUrl)
    } catch (error) {
        return NextResponse.json({ error: error })
    }

}