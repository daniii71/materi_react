// Home.js

import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import "./Home.css";

function Home() {
  return (
    <div>
      <header className="bg-secondary text-white text-center">
        <Container>
          <h1 className="display-4">Selamat Datang Di Toko Sembako</h1>
          <p className="lead">Temukan Produk Yang Anda Mau Beli!!!</p>
        </Container>
      </header>

      <section className="page-section">
        <Container>
          <Row className="align-items-center">
            <Row className="align-items-center">
              <Col md={6} className="text-center mb-4">
                <img
                  className="img-fluid rounded-circle"
                  src="https://s0.bukalapak.com/attachment/029722/desain_bangunan_warung_sembako_main_image.jpg"
                  alt="Home Produk"
                />
              </Col>
              <Col md={6} className="text-center">
                <h2 className="section-heading">
                  Jelajahi Barang Untuk Kebutuhan Rumah Anda
                </h2>
                <p className="text-muted">
                  Mulai dari Makanan kebersihan rumah temukan Barang Yang ingin
                  anda ambil terbaik pada produk berkualitas Kami.
                </p>
                <div className="intro-button mx-auto">
                  <Button variant="info" size="xl" href="#products">
                    Lihat Produk
                  </Button>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>

      <section className="page-section bg-faded">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="section-heading">PERDAGANGAN</h2>
              <p className="text-muted">
                Kami menjamin pengalaman belanja Yang Barangnya sesuai apa yang
                ada inginkan.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="page-section" id="products">
        <Container>
          <h2 className="section-heading text-center">Produk Utama kami</h2>
          <Row>
            {/* Produk 1 */}
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8bxEegASTRR-ofdx8EdZXjpsOF0wd7HNk5-bYpF_qAM6zseuI0gt7kLNINAp1eQSBqw&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Kebersihan Rumah</Card.Title>
                  <Card.Text>
                    Salah satu barang untuk kebnersihan rumah agar tidak kotor
                    dan selalu wangi
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Produk 2 */}
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://2.bp.blogspot.com/-6sD39NJvBjg/W50CwD0jxdI/AAAAAAAA6Fo/WAiYnGF3piQdJaV-Ja0fQwlEncP9pWjzQCLcBGAs/s1600/kuker.png"
                />
                <Card.Body>
                  <Card.Title>Makanan</Card.Title>
                  <Card.Text>
                    Ini adalah salah satu Makanan khas hari raya hari implek dan
                    lainnya
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Produk 3 */}
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjtIO4dakyXK7z4IVd2bTsbzSTF_uDs6kaA&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Beras</Card.Title>
                  <Card.Text>
                    Beras sendiri merupaskan Makanan kita setiap hari
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="page-section bg-faded">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="section-heading">
                Ayo Mari Bergabung Dengan Toko Kami
              </h2>
              <p className="text-muted">
                Dan Anda Bisa Berlaganan Dengan Toko Kami
              </p>
              <div className="intro-button mx-auto">
                <Button variant="warning" size="xl" href="#subscribe">
                  Berlangganan Sekarang!!!
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer text-faded text-center py-5">
        <Container>
          <p className="m-0 small">
            © 2024 Toko Sembako Kami. Hak cipta dilindungi.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
