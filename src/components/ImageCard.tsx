
const ImageCard = ({ img, title }: { img: string, title: string }) => {
    return (
        <div className="flex flex-row gap-3">
            <div key={title} className=" w-32 ">
                <img
                    src={img}
                    alt={`Thumbnail ${title + 1}`}
                    className="object-cover w-full h-full rounded-md"
                />
            </div>
        </div>
    )
}

export default ImageCard