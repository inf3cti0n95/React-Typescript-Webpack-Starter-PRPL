import * as React from 'react'
import Props from "./../PropsInterface"
import State from "./../StateInterface"
import Component = React.Component;

class B extends Component<Props,State> {
    render() {
        return (
            <div>Hello People       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit excepturi sequi deserunt quam, nobis velit veniam nulla soluta iste facere officia repellat labore culpa, cupiditate facilis, assumenda dolores. Officiis, blanditiis.</div>
        );
    }
}

export default B;
