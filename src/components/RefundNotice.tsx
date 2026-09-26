import React from 'react';

export default function RefundNotice({ zh }: { zh: boolean }) {
  return <p className="mt-4 text-sm leading-6 text-slate-300">
    {zh ? '不额外提供商业无理由退款；法定撤销、退款及其他消费者权利不受影响。购买、使用或激活本身不表示放弃法定权利。' : 'No additional voluntary change-of-mind refund guarantee. Statutory cancellation, refund and other consumer rights remain unaffected. Purchase, use or activation alone does not waive these rights.'}{' '}
    <a className="text-blue-300 underline" href="/refunds" target="_blank" rel="noopener noreferrer">{zh ? '退款政策与申请方式' : 'Refund policy and how to request help'}</a>
  </p>;
}
