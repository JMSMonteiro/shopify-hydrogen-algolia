import algoConfig from '../../algolia.config.json';
import recommend from '@algolia/recommend';
export const recommendClient = recommend(algoConfig.appId, algoConfig.appKey);

// function RelatedItem({item}) {
//   return (
//     <a href={item.url}>
//       {/* eslint-disable-next-line hydrogen/prefer-image-component*/}
//       <img src={item.image_link} alt={item.name} />
//       <div>{item.category}</div>
//       <div>{item.name}</div>
//       <div>${item.price}</div>
//     </a>
//   );
// }

export function RecommendedProducts({variants}) {
  return <div />;
}
