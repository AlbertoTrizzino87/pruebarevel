import { Link } from "react-scroll";

const LargeButton = () : JSX.Element => (
    <Link to="photogrid" smooth offset={-80}>
        <a  className="button button--dimension--large button--state-active">Start here</a>
    </Link>
)

export default LargeButton;