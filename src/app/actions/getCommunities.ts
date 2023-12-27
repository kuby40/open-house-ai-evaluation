/**
 * Function for fetching data for the Communities in Calgary
 * 
 * @returns The Data of the Communities
 */
export default async function getCommunities() {

    const res: Response = await fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json')

    //if response IS NOT ok, throws error
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}