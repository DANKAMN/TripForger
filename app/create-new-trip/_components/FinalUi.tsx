import { Button } from "@/components/ui/button";
import { Globe2 } from "lucide-react";

function FinalUi({ viewTrip, disable }: any) {
    return (
        <div className="flex flex-col items-center justify-center mt-6 p-6 bg-white rounded-2xl shadow-sm text-center">
            <Globe2 className="text-primary text-4xl animate-bounce" />
            <h2 className="mt-3 text-base md:text-lg font-semibold text-primary">
            ✈️ Planning your dream trip...
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
            Gathering the best destinations, activities, and travel details for you.
            </p>
            <Button className="mt-4 w-full md:w-auto px-6" disabled={disable} onClick={viewTrip}>
            View Trip
            </Button>
        </div>
    )
}

export default FinalUi;