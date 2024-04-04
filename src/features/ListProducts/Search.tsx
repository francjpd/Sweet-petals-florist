type SearchProps = {
    placeholder: string,
    handleSearch: (value: string) => void
}

export default function Search({ handleSearch, placeholder }: SearchProps) {

    return (
        <form className="flex items-center max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-full">
                <input type="text" name='search' onChange={(e) => handleSearch(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} />
            </div>

        </form>





    )
}
