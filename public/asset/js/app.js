'use strict';

const e = React.createElement;

class VoituresContainer extends React.Component {

    constructor() {
        super(props);

        this.state = {
            voitures: '',

        }
    }


    render() {
        const voitures = Array.from({ length: 10 }).map((_, index) => <Voiture key={index}/>);
        return (
            <div className="container-car">
                {voitures}
            </div>
        );
    }
}


class Voiture extends React.Component {

    render() {

        return (
            <div className="bloc-car">
                <div className="img-car">
                    <img src="test.png" alt="test" width="100%"></img>
                </div>
                <div className="description-car">
                    <h3>Voiture</h3>
                    <p>Lorem</p>
                    <p>Lorem</p>
                    <p>Lorem</p>
                </div>
            </div>
        );
    }

}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(VoituresContainer));
// root.render(HelloWorld);
