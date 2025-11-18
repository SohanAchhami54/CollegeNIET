import { Graduate, Roboto } from "next/font/google";

export const graduateFont = Graduate({
subsets: ["latin"],
weight: "400",
variable: "--font-graduate",
});

export const robotoFont = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-roboto",
    });