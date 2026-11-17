import React from 'react';
import { Language } from '../../locales';

const refundTranslations: Record<Language, { notice: string; linkText: string }> = {
  en: {
    notice:
      'No additional voluntary change-of-mind refund guarantee. Statutory cancellation, refund and other consumer rights remain unaffected. Purchase, use or activation alone does not waive these rights.',
    linkText: 'Refund policy and how to request help',
  },
  zh: {
    notice:
      '不额外提供商业无理由退款；法定撤销、退款及其他消费者权利不受影响。购买、使用或激活本身不表示放弃法定权利。',
    linkText: '退款政策与申请方式',
  },
  ja: {
    notice:
      '任意の自己都合による返金保証は追加で提供されません。法定のキャンセル・返金およびその他の消費者権利は影響を受けません。購入・利用・有効化のみによってこれらの権利を放棄するものではありません。',
    linkText: '返金ポリシーとサポートの申請方法',
  },
  ko: {
    notice:
      '별도의 단순 변심 환불 보장은 제공되지 않습니다. 법정 취소, 환불 및 기타 소비자 권리는 영향을 받지 않으며, 구매·사용·활성화만으로 해당 권리를 포기하는 것은 아닙니다.',
    linkText: '환불 정책 및 문의 방법',
  },
  fr: {
    notice:
      'Aucune garantie commerciale supplémentaire de remboursement pour changement d’avis. Les droits légaux d’annulation, de remboursement et de protection des consommateurs restent intacts. L’achat, l’utilisation ou l’activation seuls ne valent pas renonciation.',
    linkText: 'Politique de remboursement et assistance',
  },
  de: {
    notice:
      'Keine zusätzliche freiwillige Geld-zurück-Garantie bei Meinungsänderung. Gesetzliche Widerrufs-, Erstattungs- und sonstige Verbraucherrechte bleiben unberührt. Kauf, Nutzung oder Aktivierung allein bedeuten keinen Verzicht.',
    linkText: 'Erstattungsrichtlinie & Support',
  },
  es: {
    notice:
      'No se ofrece garantía comercial adicional de reembolso por cambio de opinión. Los derechos legales de cancelación, reembolso y demás derechos del consumidor permanecen intactos. La compra, uso o activación no implican renuncia.',
    linkText: 'Política de reembolso y cómo solicitar ayuda',
  },
  ru: {
    notice:
      'Дополнительная добровольная гарантия возврата при изменении решения не предоставляется. Законные права на отмену, возврат средств и иные права потребителей сохраняются. Покупка, использование или активация не означают отказ от них.',
    linkText: 'Политика возврата и помощь',
  },
};

export default function RefundNotice({
  zh,
  language,
  className = 'mt-4 text-sm leading-6 text-slate-300',
}: {
  zh: boolean;
  language?: Language;
  className?: string;
}) {
  const resolvedLang: Language = language || (zh ? 'zh' : 'en');
  const copy = refundTranslations[resolvedLang] || refundTranslations.en;

  return (
    <p className={className}>
      {copy.notice}{' '}
      <a
        className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
        href="/refunds"
        target="_blank"
        rel="noopener noreferrer"
      >
        {copy.linkText}
      </a>
    </p>
  );
}
