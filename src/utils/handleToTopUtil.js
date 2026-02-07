const handleScrollToTopAndCleanUrl = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (window.location.hash) {
        window.history.replaceState(
            null,
            '',
            window.location.pathname
        )
    }
}

export default handleScrollToTopAndCleanUrl