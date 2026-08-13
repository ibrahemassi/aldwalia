'use client';

import React from 'react';

// World map from public domain CDN (Wikipedia Commons)
const WORLD_MAP_SVG = 'https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg';

const CHART_DATA = [
  { label: 'North America', value: 75, color: 'rgba(255, 180, 80, 0.9)' },
  { label: 'Europe', value: 60, color: 'rgba(255, 180, 80, 0.85)' },
  { label: 'Asia Pacific', value: 70, color: 'rgba(255, 180, 80, 0.9)' },
];

export default function AboutMapAndGraph() {
  return (
    <div style={{ marginBottom: 50 }}>
      <div
        className="position-re rounded overflow-hidden"
        style={{
          height: 220,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          marginBottom: 30,
        }}
      >
        <div className="d-flex align-items-center justify-content-center w-100 h-100">
          <img
            src={WORLD_MAP_SVG}
            alt="World map"
            className="w-100 h-100"
            style={{ objectFit: 'contain', opacity: 0.4, filter: 'brightness(0.6) contrast(1.2)' }}
          />
        </div>
        <div className="position-abs" style={{ top: '30%', left: '25%', width: 10, height: 10, borderRadius: '50%', background: '#e8a735', opacity: 0.9 }} />
        <div className="position-abs" style={{ top: '35%', left: '48%', width: 10, height: 10, borderRadius: '50%', background: '#e8a735', opacity: 0.9 }} />
        <div className="position-abs" style={{ top: '55%', left: '72%', width: 10, height: 10, borderRadius: '50%', background: '#e8a735', opacity: 0.9 }} />
        <div className="position-abs" style={{ top: '45%', left: '65%', width: 10, height: 10, borderRadius: '50%', background: '#e8a735', opacity: 0.9 }} />
        <div className="position-abs" style={{ top: '25%', left: '78%', width: 10, height: 10, borderRadius: '50%', background: '#e8a735', opacity: 0.9 }} />
      </div>

      <div className="row">
        <div className="col-12">
          <p className="fz-13 text-white opacity-7" style={{ marginBottom: 12 }}>Reach and coverage</p>
          {CHART_DATA.map((item) => (
            <div key={item.label} style={{ marginBottom: 16 }}>
              <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: 6 }}>
                <span className="fz-14 text-white">{item.label}</span>
                <span className="fz-14 fw-600 text-white">{item.value}%</span>
              </div>
              <div className="radius-30 overflow-hidden" style={{ height: 10, background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-100 radius-30" style={{ width: `${item.value}%`, background: item.color, minWidth: 4, transition: 'width 0.8s ease' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row" style={{ marginTop: 24 }}>
        <div className="col-4">
          <div className="radius-20 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: 25 }}>
            <h4 className="fz-24 fw-700 text-white" style={{ marginBottom: 5 }}>150+</h4>
            <p className="fz-12 text-white opacity-7" style={{ marginBottom: 0 }}>Projects completed</p>
          </div>
        </div>
        <div className="col-4">
          <div className="radius-20 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: 25 }}>
            <h4 className="fz-24 fw-700 text-white" style={{ marginBottom: 5 }}>80+</h4>
            <p className="fz-12 text-white opacity-7" style={{ marginBottom: 0 }}>Happy clients</p>
          </div>
        </div>
        <div className="col-4">
          <div className="radius-20 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', padding: 25 }}>
            <h4 className="fz-24 fw-700 text-white" style={{ marginBottom: 5 }}>100%</h4>
            <p className="fz-12 text-white opacity-7" style={{ marginBottom: 0 }}>Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
