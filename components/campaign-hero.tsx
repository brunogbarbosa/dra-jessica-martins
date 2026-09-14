'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [
  { value: '7 ANOS', label: 'VALORIZANDO A BELEZA NATURAL' },
];

function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Beleza natural, estética com intenção">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">BELEZA NATURAL</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">ESTÉTICA COM INTENÇÃO</textPath>
      </text>
      <path pathLength="1" d="M104 53c-24 2-39 19-40 44-1 16 4 30 16 40M104 53c20 8 28 25 27 45M82 88c7 3 17 3 25-1M84 109c7 5 15 6 23 3M104 53c-5 7-7 16-5 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">BELEZA QUE</p>
        <h1 id="campaign-title" aria-label="Revela a sua melhor versão">
          <span className="campaign-title-line"><span>REVELA</span></span>
          <span className="campaign-title-line"><span>A SUA MELHOR</span></span>
          <span className="campaign-title-line"><span>VERSÃO</span></span>
        </h1>
        <p className="campaign-subtitle">Rejuvenescimento e harmonização<br/>com naturalidade e sofisticação.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
      <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src={site.images.hero} alt="Retrato da Dra. Jéssica Martins" fill preload sizes="(max-width:700px) 145vw, (max-width:1100px) 77vw, 60vw"/></div>
      </figure>
      <SmileSeal/>
      <p className="campaign-editorial">Natural<br/>por<br/>escolha<span aria-hidden="true"/></p>
      <div className="campaign-metrics" aria-label="Experiência profissional">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. JÉSSICA MARTINS</p><em>Rejuvenescimento e harmonização<br className="campaign-signature-break"/> com identidade.</em></div></div>
    </div>
  </section>;
}
