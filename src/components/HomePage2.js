import React from 'react';
import {Link} from "react-router-dom";
import image64 from '../img2/Rectangle 64.png';
import image66 from '../img2/Rectangle 66.png';
import image67 from '../img2/Rectangle 67.png';
import vector from '../images/Vector (8).png';
import vector2 from '../images/Vector (9).png';
import HomePage2Main from "./HomePage2main";
import Footer from "./Footer";
import HomePage from "./HomePage";
function HomePage2(props) {
    // const vector1 = (event) =>{
    //
    // }
    // const vector1 = (event) =>{
    //     event.target.vector2.src="../images/Vector (8).png"
    //     // event.target.vector2.src={vector}
    // }

    return (
        <div className="homePage2">
            <div>
                <div className="top1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-4 mb-4 d-flex justify-content-between align-items-center">
                                {/*<a href="" className="logo">Dustlikdon.uz</a>*/}
                                <Link to="/homepage0" className="logo"><h4>Dustlikdon.uz</h4></Link>
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
            <div className="container">
                <div className="row">
                    <div className="col-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <Link to="" className="text-decoration-none">Jamiyat haqida</Link>
                                        <div className="d-flex justify-content-between spans">
                                        <span className=" d-flex align-items-center">
                                            <img src="../images/Frame1.png"/>
                                            16:48 / 12.11.20
                                        </span>
                                            <span className=" d-flex align-items-center">
                                            <img src="../images/Frame12.png"/>
                                            321
                                        </span>
                                            <span className=" d-flex align-items-center">
                                            <img src="../images/Frame11.png"/>
                                            100
                                        </span>
                                        </div>
                                    </div>
                                    <h3 className="mt-4">Eksport qiluvchi tadbirkorlik subektlariga!!!</h3>
                               <p className="mt-3 p1">“O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari<br/>
                               tomonidan istisno tariqasida maxalliy tadbirkorlik sub'ektlariga<br/>
                               eksport qilish sharti bilan birja savdolari orqali bug’doy sotilmoqda.<br/>
                                   Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining boshlangich narxi<br/>
                                   qo‘shilgan qiymat solig’isiz 1 610 000 so‘mdan, qo‘shilgan qiymat<br/>
                                   solig’ini xisobga olgan xolda 1 932 000 so‘mdan sotiladi.<br/>
                                   Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi<br/>
                                   stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining<br/>
                                   ortiqcha summasi Adliya vazirligi tomonidan 2016 yil 7 aprelda<br/>
                                   2775-son bilan ro‘yxatga olingan Nizomga asosan qaytarib beriladi.</p>
                                    <div className="line mt-5"></div>
                                    <div className="d-flex mt-3 justify-content-between">
                                        <h4>Mavzuga izohlar</h4>
                                        <h6>2 ta fikr</h6>
                                    </div>

                                    <div className="d-flex users">
                                        <img src={image64}/>
                                   <div className="users2">
                                       <textarea className="form-control" placeholder="Izoh qoldirishingiz mumkin"></textarea>
                                   </div>
                                    </div>
                                    <div className="d-flex users">
                                        <img src={image66}/>
                                        <div className="users2">
                                        <h6>Nigina Karimova</h6>
                                            <p className="mb-0">Tushunmovchilik bo’yicha qayerga murojaat qilsam bo’ladi?</p>
                                      <div className="d-flex justify-content-between align-items-center usersfooter mt-1">
                                          <button type="button" className="btn p-0 m-0"><img src={vector} /></button>
                                          <span className="text-secondary ">Javob qaytarish</span>
                                          <span className="text-secondary">15 daq avval</span>
                                      </div>
                                        </div>
                                    </div>
                                    <div className="d-flex users mb-5">
                                        <img src={image67}/>
                                        <div className="users2">
                                            <h6>Sahar Kenjayev</h6>
                                            <p className="mb-0">Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini
                                            qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center usersfooter mt-1">
                                                <button type="button" className="btn p-0 m-0"><img src={vector2} /></button>
                                                <span className="text-secondary ">Javob qaytarish</span>
                                                <span className="text-secondary">15 daq avval</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                    <div className="col-5 mt-5">
           <div className="card">
               <div className="card-body">
                   <h4>Media</h4>
                  <div className="mt-4 media">
                      <div className="d-flex justify-content-between align-items-center">
                       <span className=" d-flex align-items-center">
                                            <img src="../images/Frame1.png"/>
                                            16:48 / 12.11.20
                                        </span>
                          <Link to="/main" className="text-decoration-none">Foto galeriya</Link>
                      </div>
                      <h5 className="mt-3">"DO`STLIKDONMAXSULOTLARI"
                          AJ boshqaruv raisi...</h5>
                  </div>
                   <div className="line1"></div>
                   <div className="mt-4 media">
                       <div className="d-flex justify-content-between align-items-center">
                       <span className=" d-flex align-items-center">
                                            <img src="../images/Frame1.png"/>
                                            16:48 / 12.11.20
                                        </span>
                           <Link to="" className="text-decoration-none">Foto galeriya</Link>
                       </div>
                       <h5 className="mt-3">Xisobot: Buxgalteriya balansi 2-
                           kvartal</h5>
                   </div>
                   <div className="line1"></div>
                   <div className="mt-4 media">
                       <div className="d-flex justify-content-between align-items-center">
                       <span className=" d-flex align-items-center">
                                            <img src="../images/Frame1.png"/>
                                            16:48 / 12.11.20
                                        </span>
                           <Link to="" className="text-decoration-none">Video galeriya</Link>
                       </div>
                       <h5 className="mt-3">Aksiyadorlik kompaniya tizim
                           korxonalari</h5>
                   </div>
                   <div className="line1"></div>
                   <div className="mt-4 media">
                       <div className="d-flex justify-content-between align-items-center">
                       <span className=" d-flex align-items-center">
                                            <img src="../images/Frame1.png"/>
                                            16:48 / 12.11.20
                                        </span>
                           <Link to="" className="text-decoration-none">Foto galeriya</Link>
                       </div>
                       <h5 className="mt-3">Xisobot: Buxgalteriya balansi 2-
                           kvartal</h5>
                   </div>

               </div>
           </div>
                        <div className="card card2 mt-4">
                            <div className="card-body text-center">
        <h4 className="mt-5">
            Shikoyatlar mavjudmi?<br/>
            Onlayn tarzda yuboring
        </h4>
                                <img src="../images/image%2011.png" className="mt-4"/>
                                <h4 className="mt-4 hfot">
                                    Davlat interaktiv<br/>
                                    xizmatlari yagona portali
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomePage2Main/>
            <Footer/>
        </div>
    );
}

export default HomePage2;