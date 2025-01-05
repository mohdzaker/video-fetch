import { instagram } from "nayan-videos-downloader";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"
export async function POST(req: NextRequest) {
    try {
        const { link } = await req.json();

        if (!link) {
            return NextResponse.json(
                { error: "Link query parameter is required" },
                { status: 400 }
            );
        }

        const data = await instagram(link);

        // console.log(data);

        return NextResponse.json({
            status: "success",
            developer: "Mohammad Zaker",
            reel_thumbnail: data.data.thumb,
            reel_download_link: data.data.video
        });
    } catch (error) {
        console.error("Error occurred:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
