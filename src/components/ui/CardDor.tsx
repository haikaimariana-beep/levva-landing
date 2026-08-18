import { Card } from 'antd';
import type { CSSProperties } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import type { Dor } from '../../data/dores';
import { ICONE_DOR } from '../../data/iconesDor';
import { useDor } from '../../context/DorContext';
import { track } from '../../lib/track';

export function CardDor({ dor, style }: { dor: Dor; style?: CSSProperties }) {
  const { goToHeroWith } = useDor();
  const Icone = ICONE_DOR[dor.categoria];

  function handleClick() {
    track('hero_dor_focus', { origem: 'card_dor', categoria: dor.categoria });
    goToHeroWith(dor.preencheHero);
  }

  return (
    <Card
      hoverable
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Contar a dor: ${dor.textoDor}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      data-track="card-dor"
      data-categoria={dor.categoria}
      className={dor.destaque ? 'card-dor card-dor--destaque' : 'card-dor'}
      style={style}
      styles={{ body: { display: 'flex', flexDirection: 'column', gap: 16, height: '100%' } }}
    >
      {dor.destaque && <span className="card-dor__badge">a dor mais comum</span>}
      <span className="card-dor__icone" aria-hidden="true">
        <Icone />
      </span>
      <p className="card-dor__texto">&ldquo;{dor.textoDor}&rdquo;</p>
      <p className="card-dor__area">→ {dor.areaValor}</p>
      <span className="card-dor-affordance">
        contar essa dor <ArrowRightOutlined />
      </span>
    </Card>
  );
}
