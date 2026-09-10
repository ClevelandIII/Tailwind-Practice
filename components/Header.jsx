export default function Header() {
    return (
        <header>
            <nav className="bg-koku-purple text-white grid grid-cols-3 p-5 border-b-6 border-black mb-10">
                <h1 className="font-comic text-2xl text-black">Kokushibo Fan Page</h1>
                <div className="col-span-2 flex justify-around items-center px-10">
                    <p>About</p>
                    <p>Images</p>
                    <p>Relevance</p>
                    <p>Contact</p>
                </div>
            </nav>
        </header>
    )
}
