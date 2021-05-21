import React from 'react';

function HomePage(props) {
    return (
        <div>
            <div className="top1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-4 mb-4 d-flex justify-content-between align-items-center">
                            <a href="https://kun.uz" className="logo">Dustlikdon.uz</a>
                            <div className="input-group inputgroup1">
                                <div className="input-group-prepend border-0">
                                    <img src="../images/Frame.png"/>
                                </div>
                                <input type="text" className="form-control border-0" placeholder="Saytdan izlash"/>
                            </div>
                            <span>На русском</span>
                            <button type="button" className="btn border rounded text-success d-flex align-items-center">
                                <img src="../images/Frame2.png" className="img1"/> <span>99872 335-41-16</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-4 mb-4 d-flex">
                            <a href="#"><img src="../images/Frame3.png" className="bg-success rounded p-2"></img></a>
                            <ul className="nav nav1">
                                <li className="nav-item"><a href="#" className="nav-link">Jamiyat haqida</a> </li>
                                <li className="nav-item"><a href="#" className="nav-link">Struktura</a> </li>
                                <li className="nav-item"><a href="#" className="nav-link">Yangiliklar</a> </li>
                                <li className="nav-item"><a href="#" className="nav-link">Elektron murojaatlar</a> </li>
                                <li className="nav-item"><a href="#" className="nav-link">Interaktiv xizmatlar</a> </li>
                                <li className="nav-item"><a href="#" className="nav-link">Aloqa</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;