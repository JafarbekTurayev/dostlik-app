import {Link} from "react-router-dom";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
function NavBar() {
return(
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
                    <li className="nav-item"><Link to="/admin" className="nav-link">Jamiyat haqida</Link> </li>
                    <li className="nav-item"><Link to="/admin" className="nav-link">Struktura</Link> </li>
                    <li className="nav-item"><Link to="/admin" className="nav-link">Yangiliklar</Link> </li>
                    <li className="nav-item"><Link to="/admin" className="nav-link">Elektron murojaatlar</Link> </li>
                    <li className="nav-item"><Link to="/admin" className="nav-link">Interaktiv xizmatlar</Link> </li>
                    <li className="nav-item"><Link to="/admin" className="nav-link">Aloqa</Link> </li>
                </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default NavBar