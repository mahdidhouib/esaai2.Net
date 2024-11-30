export class Complaint {
  constructor(id, customerId, productId, description, status, date) {
    this.id = id;
    this.customerId = customerId;
    this.productId = productId;
    this.description = description;
    this.status = status;
    this.date = date;
  }
}