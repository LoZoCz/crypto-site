type CyptoPageLinkProps = {
    link: string
    label:
        | 'facebook'
        | 'telegram'
        | 'twitter'
        | 'github'
        | 'homepage'
        | 'reddit'
    icon: string
    type: 'facebook' | 'telegram' | 'twitter' | 'github' | 'homepage' | 'reddit'
}

const CryptoPageLink = ({ label, icon, type, link }: CyptoPageLinkProps) => {
    return (
        <a className={`crypto__page-social social-link ${type}`} href={link}>
            <span>{label}</span> <img src={icon} alt={`${label} link`} />
        </a>
    )
}

export default CryptoPageLink
