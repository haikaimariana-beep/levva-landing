import { useState } from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { track } from '../lib/track';
import { useActiveSection } from '../lib/useActiveSection';
import { smoothScrollTo } from '../lib/motion/scrollTo';
import { whatsappLink } from '../lib/whatsapp';
import logoLevva from '../assets/figma/logo-levva.png';

const NAV_ITEMS = [
  { id: 'espelho', label: 'O espelho' },
  { id: 'virada', label: 'Contexto' },
  { id: 'metodo', label: 'O método' },
  { id: 'dores', label: 'Onde resolvemos' },
  { id: 'prova', label: 'Prova viva' },
  { id: 'como', label: 'Como trabalhamos' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));

  function handleCta() {
    track('whatsapp_click', { origem: 'header' });
    setMenuOpen(false);
    window.open(whatsappLink(), '_blank', 'noopener,noreferrer');
  }

  function handleNavClick(id: string) {
    track('nav_click', { destino: id });
    setMenuOpen(false);
    smoothScrollTo(`#${id}`);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          href="#hero"
          className="site-header__brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          aria-label="levva — voltar ao topo"
        >
          <img src={logoLevva} alt="levva" className="site-header__logo-img" />
        </a>

        <nav className="site-header__nav" aria-label="Seções da página">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`site-header__nav-link${active === item.id ? ' site-header__nav-link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          type="default"
          icon={<ArrowRightOutlined />}
          iconPlacement="end"
          onClick={handleCta}
          data-track="degrau"
          data-degrau="header"
          className="site-header__cta"
        >
          Falar com a levva
        </Button>

        <button
          type="button"
          className="site-header__burger"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      <nav
        className={`site-header__mobile-nav${menuOpen ? ' site-header__mobile-nav--open' : ''}`}
        aria-label="Seções da página (mobile)"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="site-header__mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
        <Button
          type="default"
          icon={<ArrowRightOutlined />}
          iconPlacement="end"
          onClick={handleCta}
          data-track="degrau"
          data-degrau="header-mobile"
          className="site-header__mobile-cta"
        >
          Falar com a levva
        </Button>
      </nav>
    </header>
  );
}
