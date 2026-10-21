import { Helmet } from "react-helmet-async";

interface SEOHelmetProps {
    title: string;
    description: string;
}

const SITE_NAME = "KuroDev | Andrés Licona";
const BASE_URL = "https://andreslicona.netlify.app";

export default function SEOHelmet({ title, description }: SEOHelmetProps) {
    const fullTitle = `${title} | ${SITE_NAME}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={BASE_URL} />
            <meta property="og:site_name" content={SITE_NAME} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
