
import React from 'react';


const Main = React.createClass({

    render() {
        console.log("chidlren", Array.isArray(this.props.personel));
        return (
            <main className="mainWrap">
                <ul>
                    {this.props.personel.map((person, index) => (
                        <li key={index}>{person.Name}</li>
                        ))}
                </ul>
            </main>
            );
    }

});

export default Main;