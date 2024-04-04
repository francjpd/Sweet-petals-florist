export default function Header({ children }: { children?: React.ReactNode }) {
    return (<header>
        <h1 className="text-5xl dark:text-white">Floristeria Dulces Petalos</h1>
        {children}
    </header>)
}