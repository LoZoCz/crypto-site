import { CryptoObjectTypes } from '../utils/cryptoObjectTypes'
import CryptoPageLink from './CryptoPageLink'
import fbIcon from '../../../assets/images/icons/facebook.svg'
import redditIcon from '../../../assets/images/icons/reddit.svg'
import telegramIcon from '../../../assets/images/icons/telegram.svg'
import twitterIcon from '../../../assets/images/icons/twitter.svg'
import githubIcon from '../../../assets/images/icons/github.svg'
import homeIcon from '../../../assets/images/icons/home.svg'

type LinksRenderProps = {
    res: CryptoObjectTypes | undefined
}

const linksIcons = {
    facebook: fbIcon,
    reddit: redditIcon,
    telegram: telegramIcon,
    twitter: twitterIcon,
    github: githubIcon,
    homepage: homeIcon,
}

const LinksRender = ({ res }: LinksRenderProps) => {
    return (
        <>
            {res?.links?.facebook_username && (
                <CryptoPageLink
                    label="facebook"
                    type="facebook"
                    link={`https://facebook.com/${res?.links?.facebook_username}`}
                    icon={linksIcons.facebook}
                />
            )}
            {res?.links?.subreddit_url && (
                <CryptoPageLink
                    label="reddit"
                    type="reddit"
                    link={res?.links?.subreddit_url}
                    icon={linksIcons.reddit}
                />
            )}
            {res?.links?.telegram_channel_identifier && (
                <CryptoPageLink
                    label="telegram"
                    type="telegram"
                    link={`https://t.me/${res?.links?.telegram_channel_identifier}`}
                    icon={linksIcons.telegram}
                />
            )}
            {res?.links?.repos_url?.github && (
                <CryptoPageLink
                    label="github"
                    type="github"
                    link={res?.links?.repos_url?.github[0]}
                    icon={linksIcons.github}
                />
            )}
            {res?.links?.twitter_screen_name && (
                <CryptoPageLink
                    label="twitter"
                    type="twitter"
                    link={`https://twitter.com/${res?.links?.twitter_screen_name}`}
                    icon={linksIcons.twitter}
                />
            )}
            {res?.links?.homepage && (
                <CryptoPageLink
                    label="homepage"
                    type="homepage"
                    link={res?.links?.homepage[0]}
                    icon={linksIcons.homepage}
                />
            )}
        </>
    )
}

export default LinksRender
