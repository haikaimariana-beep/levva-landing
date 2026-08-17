import {
  DatabaseOutlined,
  ExperimentOutlined,
  HeartOutlined,
  RiseOutlined,
  RobotOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import type { CategoriaDor } from './dores';

export const ICONE_DOR: Record<CategoriaDor, typeof RobotOutlined> = {
  trabalho_manual: RobotOutlined,
  legado: ToolOutlined,
  piloto_sem_resultado: ExperimentOutlined,
  risco_compliance: SafetyCertificateOutlined,
  dados: DatabaseOutlined,
  falta_time: TeamOutlined,
  produto_novo: RocketOutlined,
  cultura_adocao: HeartOutlined,
  escala: RiseOutlined,
  nao_classificado: RobotOutlined,
};
