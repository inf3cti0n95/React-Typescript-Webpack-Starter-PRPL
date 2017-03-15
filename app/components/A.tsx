import * as React from 'react'
import Props from "./../PropsInterface"
import State from "./../StateInterface"
import Component = React.Component;
import * as styles from './A.sass'
import {Link} from 'react-router'
class A extends Component<Props,State> {

    
   
    
    render() {
        console.log(this.props)
        return (
            <div style={styles}>
                <Link to={"/A/C"}>C</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam iste deleniti, animi ipsa excepturi at a! Numquam, adipisci nostrum omnis temporibus sunt beatae vitae ex quis laudantium reiciendis distinctio sapiente.</p>
                {this.props.children}
            </div>
        );
    }
}

export default A;
