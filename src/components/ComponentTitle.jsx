
const ComponentTitle = ({children, className, style}) => {
    return(
        <>
            <h1 className={className} style={style}>
                {children}
            </h1>
        </>
    )
}

export default ComponentTitle