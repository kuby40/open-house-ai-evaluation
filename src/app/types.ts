export type CommunityType = {
    id: string,
    name: string,
    imgUrl: string,
    group: string
    averageHomeCost: number | undefined
}

export type HomeType = {
    id: string,
    communityId: string,
    price: number,
    area: number,
    type: string
}
