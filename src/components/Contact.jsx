import SocialLinks from "./SocialLinks";

export default function Contact({ sectionRef }) {
    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative py-10 px-6 sm:py-24 max-width mx-auto"
        >
            <div className="max-w-5xl mx-auto bg-[var(--tertiary)] dark:bg-[var(--primary)] p-12 sm:p-20 rounded-2xl border border-gray-300 dark:border-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="space-y-6 text-center sm:text-left">
                        <h2 className="text-3xl font-light text-[var(--primary)] dark:text-[var(--tertiary)] mb-6">
                            Looking to team up?
                        </h2>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-500 dark:text-gray-400 tracking-wide">
                                <a
                                    href="mailto:hannahtano05@gmail.com"
                                    className="hover:text-[var(--secondary)] transition-colors duration-300"
                                >
                                    hannahtano05@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-light text-[var(--primary)] dark:text-[var(--tertiary)] text-center sm:text-right">
                            Let's connect
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-center sm:justify-end">
                                <SocialLinks isInContact={true} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 h-1 w-2/2 mx-auto bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent rounded-full"></div>

                <div className="text-center mt-8">
                    <div className="space-y-2">
                        <p className="text-lg text-[var(--primary)] dark:text-[var(--tertiary)] font-medium">
                            Made with 💙 and a bit of patience
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            © {new Date().getFullYear()} Hannah Tano. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}