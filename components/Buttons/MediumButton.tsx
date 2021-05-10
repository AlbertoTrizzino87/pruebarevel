const MediumButton = ({anchorText, handleClick} : {anchorText: string, handleClick: any}): JSX.Element => (
        <button 
            type="button" 
            className="button button--dimension--medium button--state-empty"
            onClick={ () => handleClick()}
            >
            {anchorText}
        </button>
    )

export default MediumButton;