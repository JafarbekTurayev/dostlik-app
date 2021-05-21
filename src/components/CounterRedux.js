import React from 'react';
import {connect} from "react-redux";
import {incrementNumber,decrementNumber} from "../redux/actions/counterAction";

const CounterRedux = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">{props.number}</h1>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button type="button" className="btn btn-success" onClick={props.incrementNumber}>+</button>
                            <button type="button" className="btn btn-danger" onClick={props.decrementNumber}>-</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
const mapStateToProps = (state) =>{
    console.log(state);
    return {
        number: state.counter.number
    }
}
export default connect(mapStateToProps, {incrementNumber,decrementNumber})(CounterRedux) ;
// export default connect(null,null)(CounterRedux) ;
// null null
// state , action