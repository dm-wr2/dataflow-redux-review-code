import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUser, clearUser} from '../redux/userReducer';
import {getCars} from '../redux/carReducer';

const ReduxExamples = props => {
    console.log(props)
    useEffect(() => {
        props.getCars();
    }, [])

    return (
        <div>
            <p>{props.userReducer.username}</p>
            <p>{props.userReducer.hometown}</p>
            <button onClick={() => props.getUser({username: 'Spongebob', hometown: 'Also Bikini Bottom'})}>Change User</button>
            <button onClick={props.clearUser}>Clear User</button>
            {props.carReducer.cars.map((car, i) => (
                <p key={i}>{car.make} {car.model}</p>
            ))}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

// const mapStateToProps = reduxState => {
//     return {
//         username: reduxState.username,
//         hometown: reduxState.hometown
//     }
// }

// const mapDispatchToProps = {
//     getUser,
//     clearUser
// }

export default connect(mapStateToProps, {getUser, clearUser, getCars})(ReduxExamples);

//export default withRouter(connect(mapStateToProps)(ReduxExamples));