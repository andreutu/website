export default function Link({ link, display }: { link: string; display: string }) {
    return (
        <a href={link} target="_blank" rel="noopener" className="text-orange-400 underline hover:text-orange-300">
            {display}
        </a>
    );
}
