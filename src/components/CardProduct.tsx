import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

const CardProduct = () => {
    return (
        <Card className="overflow-hidden">
            <div className="relative w-full aspect-[3/2]">
                <Image
                    src={"https://placehold.co/600x400"}
                    alt={"Image Product"}
                    fill
                    className="object-cover"
                    unoptimized={true}
                />
            </div>
            <CardContent className="p-4">
                <div className="flex flex-col gap-2 items-center text-center">
                    <p className={"text-lg font-bold"}>Nama Product</p>
                    <p className={"text-sm font-light"}>Desc product</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardProduct;