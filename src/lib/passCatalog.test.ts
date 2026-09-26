import { expect, it } from 'vitest';
import { parsePassCatalog } from './passCatalog';
const product = {productId:'pass.flex',durationMonths:7,priceInCents:'1299',title:'Flexible pass'};
it('accepts database plans and protobuf integer strings',()=>{
 expect(parsePassCatalog({products:[product]})).toEqual([{id:'pass.flex',months:7,cents:1299,title:'Flexible pass',description:'',recommended:false}]);
});
it.each([null,{...product,priceInCents:true},{...product,durationMonths:true},{...product,isRecommended:'false'},{...product,description:{}},{...product,productId:' '},{...product,priceInCents:'0'}])('rejects malformed catalog products: %j',p=>{
 expect(()=>parsePassCatalog({products:[p]})).toThrow();
});
it('rejects duplicate IDs',()=>expect(()=>parsePassCatalog({products:[product,product]})).toThrow());
