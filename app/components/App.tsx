import * as React from "react";
import { Link } from 'react-router'
const PropTypes = React.PropTypes;
const tag = document.createElement('script');
tag.async = true;
interface IAppProps{
    routes: any;
};

interface IAppState{};

class App extends React.Component<IAppProps, IAppState>{
    constructor(props: IAppProps) {
        super();
        this.props = props;
    }
    componentDidMount() {
        window.__CHUNKS.forEach(src => {
            tag.src = src;
            document.head.appendChild(tag.cloneNode());
        });
    }
    public render(): JSX.Element{

        console.log(this.props.routes[0])

        return (
            <div>

            <Link to='/A'>A</Link>
            <Link to='/B'>B</Link>
            <div>This is App page</div>
             {this.props.children}
            </div>
        );
    }
}

export default App;
