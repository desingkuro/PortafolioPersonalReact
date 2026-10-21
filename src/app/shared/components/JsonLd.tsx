import { Helmet } from "react-helmet-async";

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrés Licona Machado",
    url: "https://andreslicona.netlify.app",
    jobTitle: "Full Stack Developer",
    sameAs: [
        "https://www.linkedin.com/in/andres-licona-machado/",
        "https://github.com/desingkuro",
    ],
    knowsAbout: [
        "React", "Angular", "TypeScript", "Node.js", "PostgreSQL",
        "Python", "NestJS", "React Native",
    ],
};

export default function JsonLd() {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(JSON_LD)}
            </script>
        </Helmet>
    );
}
