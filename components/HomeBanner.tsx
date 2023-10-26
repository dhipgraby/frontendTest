import Image from "next/image"

export default function HomeBanner() {
    return (
        <div className="banner ta-r">
            <Image
                width={654}
                height={222}
                alt="homebanner"
                priority={true}
                src="/assets/home-banner.jpg" />
        </div>
    )
}