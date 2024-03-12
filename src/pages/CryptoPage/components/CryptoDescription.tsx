import { useEffect, useState } from 'react'
import translate from 'translate'

type CryptoDescriptionProps = {
    text: string | undefined
    loading: boolean
}

const CryptoDescription = ({ text = '', loading }: CryptoDescriptionProps) => {
    const [translatedText, setTranslatedText] = useState<string>('')

    useEffect(() => {
        const translateText = async () => {
            if (text) {
                const translatedParagraph = await translate(text, 'pl')
                setTranslatedText(translatedParagraph)
            }
        }

        translateText()
    }, [text])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <p
            className="crypto__page-desc p"
            dangerouslySetInnerHTML={{ __html: translatedText }}
        />
    )
}

export default CryptoDescription
