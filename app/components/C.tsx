import * as React from "react";

interface ICProps {};

interface ICState {};

class C extends React.Component<ICProps, ICState> {
    public render(): JSX.Element {
        return (<span>C</span>);
    }
}

export default C;
