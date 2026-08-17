import ambev from '../assets/logos/ambev.svg';
import ache from '../assets/logos/ache.svg';
import abInbev from '../assets/logos/ab-inbev.svg';
import b3 from '../assets/logos/b3.png';
import ems from '../assets/logos/ems.svg';
import azul from '../assets/logos/azul.svg';
import ccr from '../assets/logos/ccr.svg';

import aws from '../assets/logos/aws.svg';
import anthropic from '../assets/logos/anthropic.svg';
import microsoft from '../assets/logos/microsoft.svg';
import googleCloud from '../assets/logos/google-cloud.svg';
import databricks from '../assets/logos/databricks.svg';
import snowflake from '../assets/logos/snowflake.svg';
import openai from '../assets/logos/openai.svg';

export interface LogoAsset {
  nome: string;
  src: string;
}

export const CLIENTE_LOGOS: LogoAsset[] = [
  { nome: 'Ambev', src: ambev },
  { nome: 'Aché', src: ache },
  { nome: 'AB InBev', src: abInbev },
  { nome: 'B3', src: b3 },
  { nome: 'EMS', src: ems },
  { nome: 'Azul', src: azul },
  { nome: 'CCR', src: ccr },
];

export const PARCEIRO_LOGOS: LogoAsset[] = [
  { nome: 'AWS', src: aws },
  { nome: 'Anthropic', src: anthropic },
  { nome: 'Microsoft', src: microsoft },
  { nome: 'Google Cloud', src: googleCloud },
  { nome: 'Databricks', src: databricks },
  { nome: 'Snowflake', src: snowflake },
  { nome: 'OpenAI', src: openai },
];
