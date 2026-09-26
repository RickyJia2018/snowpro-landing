export type PassPlan = { id: string; months: number; cents: number; title: string; description: string; recommended: boolean };
export function parsePassCatalog(data: unknown): PassPlan[] {
 if(!data||typeof data!=='object')throw new Error('Invalid catalog');
 const products=(data as {products?:unknown}).products;
 if(!Array.isArray(products))throw new Error('Invalid catalog');
 const ids=new Set<string>();
 return products.map(p=>{
  if(!p||typeof p!=='object'||Array.isArray(p))throw new Error('Invalid product');
  const rawMonths=p.durationMonths??p.duration_months;const rawCents=p.priceInCents??p.price_in_cents;
  const numeric=(v:unknown)=>typeof v==='number'||(typeof v==='string'&&/^\d+$/.test(v));
  const recommended=p.isRecommended??p.is_recommended??false;
  if(!numeric(rawMonths)||!numeric(rawCents)||typeof recommended!=='boolean'||(p.description!=null&&typeof p.description!=='string'))throw new Error('Invalid product');
  const id=p.productId??p.product_id;const months=Number(p.durationMonths??p.duration_months);const cents=Number(p.priceInCents??p.price_in_cents);
  if(typeof id!=='string'||!id.trim()||id!==id.trim()||ids.has(id)||!Number.isInteger(months)||months<1||months>32767||!Number.isSafeInteger(cents)||cents<1||cents>100000000||typeof p.title!=='string'||!p.title.trim())throw new Error('Invalid product');
  ids.add(id);return {id,months,cents,title:p.title,description:p.description??'',recommended};
 });
}
