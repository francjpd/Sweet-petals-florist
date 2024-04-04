export default function Header({ children }: { children?: React.ReactNode }) {
    return (<header>
        <h1>Floristeria Dulces Petalos</h1>
        {children}
    </header>)
}