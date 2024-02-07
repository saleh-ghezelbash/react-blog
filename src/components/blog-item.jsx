import { BsHeart, BsHeartFill, BsChatSquareText, BsChatSquareTextFill     } from "react-icons/bs";

function BlogItem(params) {
    return (
        <div className="my-2 rounded-md p-4 bg-slate-200">
            <div>
                <div className="profile flex gap-2 mb-4">
                    <div className="image rounded-full w-12 h-12 bg-emerald-200 p-1 overflow-hidden">
                        <div className="bg-white overflow-hidden rounded-full">
                            <img src="logo192.png" alt="profile-img"/>
                        </div>
                    </div>
                    <div className="name flex flex-col justify-center">
                        <span>John</span>
                        <span></span>
                    </div>
                </div>
                <div className="blog my-8">
                    <p>Title</p>
                    <div className="flex justify-center items-center">
                        <img src="logo512.png" alt="blog-img"/>
                    </div>
                    <p>Description</p>
                </div>
                <div className="status flex">
                    <div className="flex gap-4 justify-center">
                        <div className="flex gap-1 items-center">
                            <BsHeart size="1.3em"/> <span>5</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <BsChatSquareText size="1.3em"/> <span>3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem