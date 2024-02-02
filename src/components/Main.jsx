import React from "react";
import './main.css';


const Main = () => {
    return (
        <div>

            <section className="about-us">
                <div className="about">
                    <img src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/06/22/fa5bc38f-cfa2-4981-946c-555a6f4e9f8b-1687380787897-cb674fcb1221b45b95cad6563f2e2864.jpg" className="pic" />
                    <div className="text">
                        <h2>About Us</h2>
                        <h5> <span>BaliLive.id</span></h5>
                        <p>BaliLive.id adalah sebuah website reservasi restoran dan juga hotel yang berada di Bali,dengan harga terbaik,dan fasilitas terbaik,jadi selamat memesan dan nikmati liburan anda.Klik menu Pemesanan diatas layar untuk melakukan pemesanan.</p>
                        <div className="data">
                            
                        </div>
                    </div>
                </div>
                <div className="border"></div>
            </section>

            <section>
                <div class="row">
                    <h2 class="section-heading">Our Services</h2>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="card">
                            {/* <div class="icon-wrapper">
                                <i class="fas fa-hammer"></i>
                            </div> */}
                            <h3>Reservasi Restoran</h3>
                            <p>
                                Di website kami juga dapat melakukan reservasi restoran terbaik yang ada di Bali denganlayanan dan fasilitas terbaik
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            {/* <div class="icon-wrapper">
                                <i class="fas fa-brush"></i>
                            </div> */}
                            <h3>Pemesanan Hotel</h3>
                            <p>
                                Diwebsite kami,anda dapat memesan hotel dengan referensi hotel
                                terbaik,dengan harga terbaik
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            {/* <div class="icon-wrapper">
                                <i class="fas fa-wrench"></i>
                            </div> */}
                            <h3>Dining</h3>
                            <p>
                                Diwebsite kami anda bisa memesan restoran 
                                khusus untuk makan malam dengan berbagai tema.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main