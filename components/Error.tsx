const Error = ({title, description} : {title: string, description: string}) : JSX.Element => (
    <div className="container container--error">
        <h4 className="container--error__title">{title}</h4>
        <p>{description}</p>
    </div>
)

export default Error;