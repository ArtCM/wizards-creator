import Link from "next/link";

interface CardProps {
    title: string
    text: string
    href: string
}

export default function WizardCard({ title, text, href }: CardProps) {
    return (
        <>
            <div className="rounded overflow-hidden shadow-xl border-solid border-2 border-blue-100 m-4 h-72 w-60 mx-auto flex items-center justify-center flex-col">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">{title}</div>
                    <p className="text-gray-700 text-base overflow-hidden break-all h-36 w-60 px-5">{text}</p>
                </div>
                <div className="px-6 py-4 mt-auto">
                    <Link href={href} passHref legacyBehavior>
                        <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
                            Visualizar
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}