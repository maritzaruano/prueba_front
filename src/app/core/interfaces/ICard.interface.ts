export interface ICard{
    balanceProduct: string,
    detaildProduct: string
    nameProduct: string
    numberProduct: string
}

export interface IListCard{
    listCard: ICard[]
}

export interface IOpcionMenu{
    icono: string ,
    description: string,
    url: string,
    selected: boolean
}