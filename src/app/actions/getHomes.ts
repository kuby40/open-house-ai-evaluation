/**
 * Function for fetching data for the homes in Calgary
 * 
 * @returns The Data of the Homes
 */
export default async function getHomes() {
    const res: Response = await fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json')

    //if response IS NOT ok, throws error
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}