import Community from './components/Community/Community'
import getCommunities from './actions/getCommunities'
import getHomes from './actions/getHomes';
import { CommunityType, HomeType } from './types';
/**
 * 
 * @returns The Home page to the website
 */
export default async function Home() {
  //Fetching Data
  const communitiesData: Array<CommunityType> = await getCommunities();
  const homes: Array<HomeType> = await getHomes();
  /**
   * 
   * @param data The Array of Homes to be sorted
   * @returns A map of Homes sorted into there communityId's as the keys and the average price as the values
   */
  function calculateAveragePrice(data: HomeType[]): Map<string, number> {
    const averagePrices = new Map<string, number>();
    const totalPrices = new Map<string, number>();
    const count = new Map<string, number>();
    for (const obj of data) {
      const id = obj.communityId;
      const price = obj.price;
      totalPrices.set(id, (totalPrices.get(id) ?? 0) + price);
      count.set(id, (count.get(id) ?? 0) + 1);
    }
    for (const [id, totalPrice] of totalPrices.entries()) {
      const averagePrice = totalPrice / count.get(id)!;
      averagePrices.set(id, averagePrice);
    }
    return averagePrices;
  }
  // Executing the price sorting then sorting the communities so they will be alphabetical A -> Z
  const averageHomeCost = calculateAveragePrice(homes)
  communitiesData.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {communitiesData.map((item: CommunityType) =>
        <Community key={item.id} id={item.id} name={item.name} imgUrl={item.imgUrl} group={item.group} averageHomeCost={averageHomeCost.get(item.id)} />
      )}
    </div>

  )
}
