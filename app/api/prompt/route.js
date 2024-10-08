import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


export const GET = async (request) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate("creator");

        return new Response(JSON.stringify(prompts), {status: 200}, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({message: error.message}), {status: 500})
    }
};