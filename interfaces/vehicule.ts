export abstract class Vehicle {
  id: number;
  vehicleNumber: string;
  price: number;
  owner?:string;

  constructor (id:number,vnumber:string, price:number, owner?:string){
    this.id =id;
    this.vehicleNumber = vnumber;
    this.price=price;
    this.owner=owner 
  }

  /**
   * Callback on success ws
   * @param {object|string} msg - reponse of ws
   * @return {string}.
   */
   public onSuccess(msg:object|string): string {
    return msg?.toString();
  }
  /**
   * Callback on error ws
   * @param {object|string} msg - reponse of ws
   * @return {string}.
   */
  public onError(msg:object|string): string {
    console.log('errors', msg);
    return msg?.toString();
  }

}