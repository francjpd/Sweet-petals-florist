export const ProductImageSkeleton = () => (
    <div className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center w-full ">
        <div className="flex flex-col items-center justify-center aspect-h-1 aspect-w-1 overflow-hidden rounded-sm dark:bg-gray-800 lg:aspect-none group-hover:opacity-75 h-52 w-full">
            <svg className="w-10 h-10 text-gray-800 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
        </div></div>
)

export const ProductDescriptionSkeleton = () => (
    <div role="status" className="w-full animate-pulse">
        <div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-56 mb-5"></div>
        <div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-56 mb-5"></div>
        <div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-56 mb-5"></div>
        <div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-56 mb-4"></div>
        <span className="sr-only">Loading...</span>
    </div>
)
