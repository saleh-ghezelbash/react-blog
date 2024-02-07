import BlogList from "./blog-list"

function Main(params) {
    return (
        <div className="flex gap-2">
            <div className="content w-[70%]">
                main
                <BlogList/>
            </div>
            <div className="side w-[30%]">
                side
            </div>
        </div>
    )
}

export default Main