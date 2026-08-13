import React from 'react';
import Map from './Map';

const WORKS = '/assets/imgs/works/1';

function ContactPageLayout() {
  return (
    <>
      {/* Hero section - background from works; card will overlap bottom */}
      <section
        className="position-re overflow-hidden"
        style={{
          minHeight: 380,
          background: '#0a1628',
        }}
      >
        <div
          className="absolute-full"
          style={{
            backgroundImage: `url('${WORKS}/1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.6) 100%)',
          }}
        />
        <div className="container position-re d-flex align-items-center" style={{ zIndex: 2, minHeight: 380, paddingTop: 100, paddingBottom: 120 }}>
          <div className="row w-100">
            <div className="col-12 text-center">
              <h1 className="text-white text-u ls1 fz-60 fw-700" style={{ marginBottom: 16 }}>
                Contact <span className="fw-200">us</span>
              </h1>
              <p className="fz-18 text-white opacity-8" style={{ maxWidth: 520, margin: '0 auto' }}>
                We are ready to provide the right solution according to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact card - overlapping the hero */}
      <section
        className="contact position-re"
        style={{
          marginTop: -100,
          paddingTop: 0,
          paddingBottom: 80,
          background: 'transparent',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div
                className="radius-30"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 30px 90px rgba(0,0,0,0.5)',
                  padding: 50,
                }}
              >
                <div className="row">
                  {/* Left side: contact details */}
                  <div className="col-lg-5" style={{ borderRight: '1px solid rgba(10,22,40,0.08)' }}>
                    <div style={{ marginBottom: 30 }}>
                      <span
                        className="sub-title main-color text-u"
                        style={{ fontSize: 13, marginBottom: 8, display: 'block' }}
                      >
                        Get in touch
                      </span>
                      <h2
                        style={{
                          fontSize: 30,
                          fontWeight: 700,
                          color: '#0a1628',
                          marginBottom: 12,
                        }}
                      >
                        Contact us
                      </h2>
                      <p
                        style={{
                          fontSize: 14,
                          color: '#4b5674',
                          lineHeight: 1.6,
                          marginBottom: 0,
                        }}
                      >
                        We are ready to help you with your next project. Reach out by phone,
                        email, or using the form and our team will respond as soon as possible.
                      </p>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: 16,
                        }}
                      >
                        <div
                          className="radius-50 d-flex align-items-center justify-content-center"
                          style={{
                            width: 46,
                            height: 46,
                            background: 'rgba(22,51,125,0.07)',
                            color: '#16337d',
                            marginRight: 16,
                          }}
                        >
                          <i className="ti-location-pin fz-18"></i>
                        </div>
                        <div>
                          <h6
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: '#0a1628',
                              marginBottom: 4,
                            }}
                          >
                            Head Office
                          </h6>
                          <p
                            style={{
                              fontSize: 13,
                              color: '#4b5674',
                              marginBottom: 0,
                            }}
                          >
                            Besòs 1, 08174 Sant Cugat del Vallès, Barcelona
                          </p>
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: 16,
                        }}
                      >
                        <div
                          className="radius-50 d-flex align-items-center justify-content-center"
                          style={{
                            width: 46,
                            height: 46,
                            background: 'rgba(22,51,125,0.07)',
                            color: '#16337d',
                            marginRight: 16,
                          }}
                        >
                          <i className="ti-email fz-18"></i>
                        </div>
                        <div>
                          <h6
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: '#0a1628',
                              marginBottom: 4,
                            }}
                          >
                            Email
                          </h6>
                          <p
                            style={{
                              fontSize: 13,
                              color: '#4b5674',
                              marginBottom: 0,
                            }}
                          >
                            support@aldwalya.com
                          </p>
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          className="radius-50 d-flex align-items-center justify-content-center"
                          style={{
                            width: 46,
                            height: 46,
                            background: 'rgba(22,51,125,0.07)',
                            color: '#16337d',
                            marginRight: 16,
                          }}
                        >
                          <i className="ti-mobile fz-20"></i>
                        </div>
                        <div>
                          <h6
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              color: '#0a1628',
                              marginBottom: 4,
                            }}
                          >
                            Call us
                          </h6>
                          <p
                            style={{
                              fontSize: 13,
                              color: '#4b5674',
                              marginBottom: 0,
                            }}
                          >
                            +1 840 841 25 69
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: 13,
                          color: '#4b5674',
                          marginBottom: 10,
                        }}
                      >
                        Follow our social media
                      </p>
                      <div className="d-flex" style={{ gap: 10 }}>
                        <a href="#0" className="circle-40 d-flex align-items-center justify-content-center">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0" className="circle-40 d-flex align-items-center justify-content-center">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#0" className="circle-40 d-flex align-items-center justify-content-center">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#0" className="circle-40 d-flex align-items-center justify-content-center">
                          <i className="fab fa-x-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right side: form */}
                  <div className="col-lg-7">
                    <div style={{ paddingLeft: 40, paddingTop: 10 }}>
                      <h3
                        style={{
                          fontSize: 24,
                          fontWeight: 700,
                          color: '#0a1628',
                          marginBottom: 10,
                        }}
                      >
                        Send us a message
                      </h3>
                      <p
                        style={{
                          fontSize: 14,
                          color: '#4b5674',
                          lineHeight: 1.6,
                          marginBottom: 30,
                        }}
                      >
                        Fill out the form and we&apos;ll get back to you within one business day.
                      </p>

                      <form className="form2" method="post" action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group" style={{ marginBottom: 20 }}>
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group" style={{ marginBottom: 20 }}>
                              <input
                                type="text"
                                name="company"
                                placeholder="Company"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group" style={{ marginBottom: 20 }}>
                              <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group" style={{ marginBottom: 20 }}>
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group" style={{ marginBottom: 20 }}>
                              <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group" style={{ marginBottom: 24 }}>
                              <textarea
                                name="message"
                                placeholder="Message"
                                rows="4"
                                required
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-12 d-flex justify-content-end">
                            <button
                              type="submit"
                              className="butn butn-md radius-30"
                              style={{
                                background: '#16337d',
                                color: '#ffffff',
                                padding: '14px 40px',
                                border: 'none',
                              }}
                            >
                              <span>Send message</span>
                              <i className="ti-arrow-right" style={{ marginLeft: 10 }}></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section>
        <Map />
      </section>
    </>
  );
}

export default ContactPageLayout;

